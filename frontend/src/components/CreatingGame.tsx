import React, { useState, useEffect } from "react";
import {
    doc,
    onSnapshot,
    updateDoc,
    collection,
    query,
    where,
    getDocs,
} from "firebase/firestore";
import { db, auth } from "./firebase";
import { getUsernameById } from "./usernameHelpers";
import GameCanvas from "./GameCanvas";
import {
    createGame as createGameFunction,
    joinGame as joinGameFunction,
    scheduleGameTransition,
    startFightingPhase,
} from "./CloudFunctions";
import type { User } from "firebase/auth";
import GameWithShapes from "./GameWithShapes";

interface GameUser {
    uid: string;
    username: string;
    ready: boolean;
    readyForFight?: boolean;
}

interface Game {
    id: string;
    state: "waiting" | "started" | "fighting" | "ended";
    user1: GameUser | null;
    user2: GameUser | null;
    grid: { [key: string]: number[] };
    createdAt: any;
    startedAt?: any;
    fightingStartedAt?: any;
    finalGrid?: { [key: string]: number[] };
    winner?: string;
    timerStarted?: boolean;
}

const CreatingGame: React.FC = () => {
    const [game, setGame] = useState<Game | null>(null);
    const [gameId, setGameId] = useState<string>("");
    const [isCreating, setIsCreating] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [currentUserReady, setCurrentUserReady] = useState(false);
    const [waitingForPlayer, setWaitingForPlayer] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // State for animation and countdown
    const [timeRemaining, setTimeRemaining] = useState<number>(0);
    const [animationComplete, setAnimationComplete] = useState(false);

    // Check authentication state and look for existing games
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user);
            if (user) {
                // Check if user is in any active game
                await checkForExistingGame(user.uid);
            }
            setIsLoading(false);
        });
        return unsubscribe;
    }, []);

    // Check if user is in any active game
    const checkForExistingGame = async (uid: string) => {
        try {
            const gamesRef = collection(db, "games");
            const q1 = query(
                gamesRef,
                where("user1.uid", "==", uid),
                where("state", "!=", "ended")
            );
            const q2 = query(
                gamesRef,
                where("user2.uid", "==", uid),
                where("state", "!=", "ended")
            );

            const [snapshot1, snapshot2] = await Promise.all([
                getDocs(q1),
                getDocs(q2),
            ]);

            if (!snapshot1.empty) {
                const gameDoc = snapshot1.docs[0];
                setGameId(gameDoc.id);
                setGame({ id: gameDoc.id, ...gameDoc.data() } as Game);
            } else if (!snapshot2.empty) {
                const gameDoc = snapshot2.docs[0];
                setGameId(gameDoc.id);
                setGame({ id: gameDoc.id, ...gameDoc.data() } as Game);
            }
        } catch (error) {
            console.error("Error checking for existing game:", error);
        }
    };

    // Create a new game
    const createGame = async () => {
        if (!currentUser) return;

        setIsCreating(true);
        try {
            const username = await getUsernameById(currentUser.uid);
            if (!username) {
                alert("Username not found. Please set up your username first.");
                setIsCreating(false);
                return;
            }

            const result = await createGameFunction(currentUser.uid, username);
            if (result.success) {
                setGameId(result.gameId);
                setWaitingForPlayer(true);
            } else {
                alert("Failed to create game. Please try again.");
            }
        } catch (error) {
            console.error("Error creating game:", error);
            alert("Failed to create game. Please try again.");
        } finally {
            setIsCreating(false);
        }
    };

    // Join an existing game
    const joinGame = async (gameIdToJoin: string) => {
        if (!currentUser) return;

        try {
            const username = await getUsernameById(currentUser.uid);
            if (!username) {
                alert("Username not found. Please set up your username first.");
                return;
            }

            const result = await joinGameFunction(
                gameIdToJoin,
                currentUser.uid,
                username
            );
            if (result.success) {
                setGameId(gameIdToJoin);
            }
        } catch (error) {
            console.error("Error joining game:", error);
            alert(
                "Failed to join game. Please check the game ID and try again."
            );
        }
    };

    // Toggle ready state
    const toggleReady = async () => {
        if (!gameId || !currentUser || !game) return;

        const gameRef = doc(db, "games", gameId);
        const isUser1 = game.user1?.uid === currentUser.uid;
        const fieldToUpdate = isUser1 ? "user1.ready" : "user2.ready";

        try {
            await updateDoc(gameRef, {
                [fieldToUpdate]: !currentUserReady,
            });
        } catch (error) {
            console.error("Error updating ready state:", error);
        }
    };

    // Abort the game
    const abortGame = async () => {
        if (!gameId || !currentUser) return;

        const gameRef = doc(db, "games", gameId);
        try {
            await updateDoc(gameRef, {
                state: "ended",
            });
            // Reset local state
            setGame(null);
            setGameId("");
            setCurrentUserReady(false);
            setWaitingForPlayer(false);
        } catch (error) {
            console.error("Error aborting game:", error);
        }
    };

    // Restart the game
    const restartGame = async () => {
        if (!gameId || !currentUser) return;

        const gameRef = doc(db, "games", gameId);
        try {
            // Reset game state to waiting and clear all game data
            await updateDoc(gameRef, {
                state: "waiting",
                "user1.ready": false,
                "user2.ready": false,
                "user1.readyForFight": false,
                "user2.readyForFight": false,
                grid: initializeGrid(60),
                startedAt: null,
                fightingStartedAt: null,
                finalGrid: null,
                winner: null,
                timerStarted: false,
            });

            // Reset local state
            setCurrentUserReady(false);
            setAnimationComplete(false);
            setTimeRemaining(0);
        } catch (error) {
            console.error("Error restarting game:", error);
        }
    };

    // Initialize grid helper function
    const initializeGrid = (size: number): { [key: string]: number[] } => {
        const grid: { [key: string]: number[] } = {};
        for (let row = 0; row < size; row++) {
            grid[`row${row}`] = Array(size).fill(0);
        }
        return grid;
    };

    // Handle cell click - update grid in database
    const handleCellClick = async (row: number, col: number) => {
        if (!gameId || !currentUser || !game) return;

        // Determine player number
        const playerNumber =
            game.user1?.uid === currentUser.uid
                ? 1
                : game.user2?.uid === currentUser.uid
                ? 2
                : 0;

        if (playerNumber === 0) return;

        const gameRef = doc(db, "games", gameId);
        try {
            // Update the specific cell in the grid
            const currentGrid = { ...game.grid };
            if (!currentGrid[`row${row}`]) {
                currentGrid[`row${row}`] = Array(60).fill(0);
            }

            // Toggle logic: if cell is already colored, make it uncolored (0)
            // if cell is uncolored (0), make it player's color
            const currentCellValue = currentGrid[`row${row}`][col] || 0;
            currentGrid[`row${row}`][col] =
                currentCellValue === 0 ? playerNumber : 0;

            await updateDoc(gameRef, {
                grid: currentGrid,
            });
        } catch (error) {
            console.error("Error updating grid:", error);
        }
    };

    // Handle clear player cells
    const handleClearPlayerCells = async () => {
        if (!gameId || !currentUser || !game) return;

        // Determine player number
        const playerNumber =
            game.user1?.uid === currentUser.uid
                ? 1
                : game.user2?.uid === currentUser.uid
                ? 2
                : 0;

        if (playerNumber === 0) return;

        const gameRef = doc(db, "games", gameId);
        try {
            // Get current grid and clear only the player's cells
            const currentGrid = { ...game.grid };
            const PLAYER_EDITABLE_ROWS = 18;
            const gridSize = 60;

            // Clear cells in player's editable area
            for (let row = 0; row < gridSize; row++) {
                // Check if row is in player's editable area
                const canEditRow =
                    (playerNumber === 1 && row < PLAYER_EDITABLE_ROWS) ||
                    (playerNumber === 2 &&
                        row >= gridSize - PLAYER_EDITABLE_ROWS);

                if (canEditRow && currentGrid[`row${row}`]) {
                    for (let col = 0; col < gridSize; col++) {
                        // Only clear cells that belong to the current player
                        if (currentGrid[`row${row}`][col] === playerNumber) {
                            currentGrid[`row${row}`][col] = 0;
                        }
                    }
                }
            }

            await updateDoc(gameRef, {
                grid: currentGrid,
            });
        } catch (error) {
            console.error("Error clearing player cells:", error);
        }
    };

    // Handle toggle ready for fight
    const handleToggleReadyForFight = async () => {
        if (!gameId || !currentUser || !game || game.state !== "started")
            return;

        const gameRef = doc(db, "games", gameId);
        const isUser1 = game.user1?.uid === currentUser.uid;
        const fieldToUpdate = isUser1
            ? "user1.readyForFight"
            : "user2.readyForFight";
        const currentReadyState = isUser1
            ? game.user1?.readyForFight
            : game.user2?.readyForFight;

        try {
            await updateDoc(gameRef, {
                [fieldToUpdate]: !currentReadyState,
            });

            // Check if both players are now ready for fight
            const otherPlayerReady = isUser1
                ? game.user2?.readyForFight
                : game.user1?.readyForFight;
            const currentPlayerWillBeReady = !currentReadyState;

            if (otherPlayerReady && currentPlayerWillBeReady) {
                // Both players are ready, start the fight by calling the cloud function
                try {
                    await startFightingPhase(gameId);
                } catch (error) {
                    console.error("Error starting fighting phase:", error);
                }
            }
        } catch (error) {
            console.error("Error toggling ready for fight:", error);
        }
    };

    // Handle animation completion
    const handleAnimationComplete = () => {
        setAnimationComplete(true);
    };

    // Handle shape drop - update grid in database
    const handleShapeDrop = async (
        shape: any,
        dropRow: number,
        dropCol: number
    ) => {
        if (!gameId || !currentUser || !game) return;

        // Determine player number
        const playerNumber =
            game.user1?.uid === currentUser.uid
                ? 1
                : game.user2?.uid === currentUser.uid
                ? 2
                : 0;

        if (playerNumber === 0) return;

        const gameRef = doc(db, "games", gameId);
        try {
            // Get current grid and apply shape pattern (non-destructive)
            const currentGrid = { ...game.grid };

            shape.pattern.forEach((row: number[], rowIndex: number) => {
                row.forEach((cell: number, colIndex: number) => {
                    if (cell === 1) {
                        // Only place cells where pattern has 1s
                        const targetRow = dropRow + rowIndex;
                        const targetCol = dropCol + colIndex;

                        // Ensure target position is valid
                        if (
                            targetRow >= 0 &&
                            targetRow < 60 &&
                            targetCol >= 0 &&
                            targetCol < 60
                        ) {
                            if (!currentGrid[`row${targetRow}`]) {
                                currentGrid[`row${targetRow}`] =
                                    Array(60).fill(0);
                            }

                            // Only place if target cell is empty (non-destructive)
                            if (
                                currentGrid[`row${targetRow}`][targetCol] === 0
                            ) {
                                currentGrid[`row${targetRow}`][targetCol] =
                                    playerNumber;
                            }
                        }
                    }
                });
            });

            await updateDoc(gameRef, {
                grid: currentGrid,
            });
        } catch (error) {
            console.error("Error dropping shape:", error);
        }
    };

    // Timer for countdown during started state (client-side display only)
    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (game?.state === "started" && game.startedAt) {
            const startTime = game.startedAt.toDate
                ? game.startedAt.toDate()
                : new Date(game.startedAt);
            const endTime = new Date(startTime.getTime() + 2 * 60 * 1000); // 2 minutes

            timer = setInterval(() => {
                const now = new Date();
                const remaining = Math.max(
                    0,
                    Math.ceil((endTime.getTime() - now.getTime()) / 1000)
                );
                setTimeRemaining(remaining);

                // Client-side timer is purely for display - server handles the actual transition
                if (remaining === 0) {
                    clearInterval(timer);
                    console.log(
                        "Client-side timer reached zero - waiting for server to transition game"
                    );
                }
            }, 1000);
        }

        // Clean up timer when component unmounts or game state changes
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [game?.state, game?.startedAt]);

    // Monitor for both players ready for fight to start battle early
    useEffect(() => {
        if (
            game?.state === "started" &&
            game.user1?.readyForFight &&
            game.user2?.readyForFight
        ) {
            // Both players are ready, the fight should start automatically
            // The handleToggleReadyForFight function already handles this,
            // but this effect ensures the UI is responsive
            console.log(
                "Both players ready for fight - battle should start soon"
            );
        }
    }, [game?.state, game?.user1?.readyForFight, game?.user2?.readyForFight]);

    // Listen to game updates
    useEffect(() => {
        if (!gameId) return;

        const gameRef = doc(db, "games", gameId);
        const unsubscribe = onSnapshot(gameRef, (doc) => {
            if (doc.exists()) {
                const gameData = { id: doc.id, ...doc.data() } as Game;

                // If game is ended, reset state
                if (gameData.state === "ended") {
                    setGame(null);
                    setGameId("");
                    setCurrentUserReady(false);
                    setWaitingForPlayer(false);
                    return;
                }

                setGame(gameData);

                // Update current user's ready state
                if (currentUser) {
                    const isUser1 = gameData.user1?.uid === currentUser.uid;
                    const readyState = isUser1
                        ? gameData.user1?.ready
                        : gameData.user2?.ready;
                    setCurrentUserReady(readyState || false);
                }

                // Check if both users are ready and start the game
                if (
                    gameData.user1?.ready &&
                    gameData.user2?.ready &&
                    gameData.state === "waiting"
                ) {
                    // Start the game and set timestamp
                    const startGame = async () => {
                        await updateDoc(gameRef, {
                            state: "started",
                            startedAt: new Date(),
                            timerStarted: false,
                        });

                        // Start the server-side timer
                        try {
                            await scheduleGameTransition(gameId);
                            console.log(
                                "Server-side timer started successfully"
                            );
                        } catch (error) {
                            console.error(
                                "Error starting server-side timer:",
                                error
                            );
                        }
                    };

                    startGame();
                }
            }
        });

        return unsubscribe;
    }, [gameId, currentUser]);

    // If game is started, show the game canvas with countdown
    if (game?.state === "started") {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        return (
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border-2 border-slate-700/50 backdrop-blur-sm">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-4">
                        🎮 Battle Arena Active 🎮
                    </h2>
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/40">
                        <div className="flex justify-center items-center gap-4 mb-4">
                            <div className="text-cyan-300 font-semibold">
                                {game.user1?.username}
                            </div>
                            <div className="text-2xl text-slate-400">VS</div>
                            <div className="text-cyan-300 font-semibold">
                                {game.user2?.username}
                            </div>
                        </div>
                        <div className="text-center mb-4">
                            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text mb-2">
                                ⏰ {minutes}:
                                {seconds.toString().padStart(2, "0")}
                            </div>
                            <p className="text-slate-400 text-sm">
                                Prepare your strategy! Battle begins
                                automatically when timer reaches zero.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={abortGame}
                                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                            >
                                Abort Game
                            </button>
                        </div>
                    </div>
                </div>
                <GameWithShapes
                    game={game}
                    currentUser={currentUser}
                    onCellClick={handleCellClick}
                    onShapeDrop={handleShapeDrop}
                    onClearPlayerCells={handleClearPlayerCells}
                    onToggleReadyForFight={handleToggleReadyForFight}
                    gridSize={60}
                />
            </div>
        );
    }

    // If game is fighting, show the fighting state
    if (game?.state === "fighting") {
        return (
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border-2 border-slate-700/50 backdrop-blur-sm">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text mb-4">
                        ⚔️ Battle in Progress ⚔️
                    </h2>
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-600/40">
                        <div className="flex justify-center items-center gap-4 mb-6">
                            <div className="text-cyan-300 font-semibold">
                                {game.user1?.username}
                            </div>
                            <div className="text-2xl text-slate-400">VS</div>
                            <div className="text-cyan-300 font-semibold">
                                {game.user2?.username}
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            {animationComplete && (
                                <button
                                    onClick={restartGame}
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                                >
                                    🔄 Restart Game
                                </button>
                            )}
                            <button
                                onClick={abortGame}
                                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                            >
                                Abort Game
                            </button>
                        </div>
                    </div>
                </div>
                <GameCanvas
                    game={game}
                    currentUser={currentUser}
                    onCellClick={handleCellClick}
                    onAnimationComplete={handleAnimationComplete}
                    onClearPlayerCells={handleClearPlayerCells}
                    onToggleReadyForFight={handleToggleReadyForFight}
                    gridSize={60}
                />
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border-2 border-slate-700/50 backdrop-blur-sm">
            {isLoading ? (
                <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-400 border-t-transparent mx-auto mb-4"></div>
                    <h2 className="text-xl font-semibold text-cyan-400">
                        Loading...
                    </h2>
                </div>
            ) : (
                <>
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                            Game Arena
                        </h2>
                        <p className="text-slate-400">
                            Create or join a Conway's Game of Life battle
                        </p>
                    </div>

                    {!gameId ? (
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-600/40">
                                <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
                                    Create New Game
                                </h3>
                                <div className="text-center mb-6">
                                    <div className="text-6xl mb-4">🎮</div>
                                    <p className="text-slate-400 text-sm">
                                        Start a new battle arena and invite a
                                        friend
                                    </p>
                                </div>
                                <button
                                    onClick={createGame}
                                    disabled={isCreating || !currentUser}
                                    className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    {isCreating ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                            Creating...
                                        </div>
                                    ) : (
                                        "Create Game"
                                    )}
                                </button>
                            </div>

                            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-600/40">
                                <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">
                                    Join Existing Game
                                </h3>
                                <div className="text-center mb-6">
                                    <div className="text-6xl mb-4">🤝</div>
                                    <p className="text-slate-400 text-sm">
                                        Enter a Game ID to join an existing
                                        battle
                                    </p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter Game ID"
                                    className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-slate-400 mb-4 transition-all duration-300 backdrop-blur-sm"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            const gameIdToJoin = (
                                                e.target as HTMLInputElement
                                            ).value.trim();
                                            if (gameIdToJoin) {
                                                joinGame(gameIdToJoin);
                                            }
                                        }
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        const input = document.querySelector(
                                            'input[placeholder="Enter Game ID"]'
                                        ) as HTMLInputElement;
                                        const gameIdToJoin =
                                            input?.value.trim();
                                        if (gameIdToJoin) {
                                            joinGame(gameIdToJoin);
                                        }
                                    }}
                                    disabled={!currentUser}
                                    className="w-full py-4 px-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    Join Game
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-xl border border-slate-600/40">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-cyan-300 mb-4">
                                    Game Lobby
                                </h3>
                                <div className="bg-slate-700/60 rounded-lg p-4 border border-slate-600/40">
                                    <p className="text-slate-300 mb-2">
                                        Game ID:
                                    </p>
                                    <div className="text-2xl font-mono text-cyan-400 tracking-wider">
                                        {gameId}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-slate-300 mb-6 text-center">
                                    Players
                                </h4>
                                <div className="grid gap-4">
                                    <div className="bg-slate-700/60 backdrop-blur-sm p-6 rounded-xl border border-slate-600/40">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                                    1
                                                </div>
                                                <span className="font-semibold text-slate-200">
                                                    {game?.user1?.username ||
                                                        "Player 1"}
                                                </span>
                                            </div>
                                            <div
                                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                                    game?.user1?.ready
                                                        ? "bg-green-500/20 text-green-400 border-2 border-green-500/50 shadow-lg shadow-green-500/20"
                                                        : "bg-slate-600/60 text-slate-400 border-2 border-slate-500/50"
                                                }`}
                                            >
                                                {game?.user1?.ready
                                                    ? "✓ Ready"
                                                    : "○ Not Ready"}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-700/60 backdrop-blur-sm p-6 rounded-xl border border-slate-600/40">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                                                    2
                                                </div>
                                                <span className="font-semibold text-slate-200">
                                                    {game?.user2?.username ||
                                                        "Waiting for Player 2..."}
                                                </span>
                                            </div>
                                            {game?.user2 && (
                                                <div
                                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                                        game?.user2?.ready
                                                            ? "bg-green-500/20 text-green-400 border-2 border-green-500/50 shadow-lg shadow-green-500/20"
                                                            : "bg-slate-600/60 text-slate-400 border-2 border-slate-500/50"
                                                    }`}
                                                >
                                                    {game?.user2?.ready
                                                        ? "✓ Ready"
                                                        : "○ Not Ready"}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {game?.user2 && (
                                <div className="mb-8">
                                    <button
                                        onClick={toggleReady}
                                        className={`w-full py-4 px-6 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                            currentUserReady
                                                ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-amber-500/25"
                                                : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-500/25"
                                        }`}
                                    >
                                        {currentUserReady
                                            ? "Cancel Ready"
                                            : "Ready to Start"}
                                    </button>

                                    {game?.user1?.ready &&
                                        game?.user2?.ready && (
                                            <div className="mt-6 text-center">
                                                <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/50">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-green-400 border-t-transparent"></div>
                                                        <p className="text-green-400 font-semibold">
                                                            Starting game...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                </div>
                            )}

                            {waitingForPlayer && !game?.user2 && (
                                <div className="mb-8">
                                    <div className="bg-cyan-500/20 rounded-lg p-6 border border-cyan-500/50">
                                        <div className="text-center">
                                            <div className="text-4xl mb-3">
                                                ⏳
                                            </div>
                                            <p className="text-cyan-300 font-semibold mb-2">
                                                Waiting for another player to
                                                join...
                                            </p>
                                            <p className="text-cyan-400 text-sm">
                                                Share this Game ID with your
                                                friend:
                                            </p>
                                            <div className="mt-3 p-3 bg-cyan-900/30 rounded-lg">
                                                <div className="text-xl font-mono text-cyan-300 tracking-wider">
                                                    {gameId}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="text-center">
                                <button
                                    onClick={abortGame}
                                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                                >
                                    Abort Game
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CreatingGame;
