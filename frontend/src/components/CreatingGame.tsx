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
} from "./CloudFunctions";
import type { User } from "firebase/auth";
import GameWithShapes from "./GameWithShapes";

interface GameUser {
    uid: string;
    username: string;
    ready: boolean;
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
        if (game?.state === "started" && game.startedAt) {
            const startTime = game.startedAt.toDate
                ? game.startedAt.toDate()
                : new Date(game.startedAt);
            const endTime = new Date(startTime.getTime() + 2 * 60 * 1000); // 2 minutes

            const timer = setInterval(() => {
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

            return () => clearInterval(timer);
        }
    }, [game?.state, game?.startedAt]);

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
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-cyan-500/30">
                <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400 glow-text">
                    🎮 Game Started! 🎮
                </h2>
                <div className="bg-gray-900 p-6 rounded-lg mb-6 border border-cyan-500/20">
                    <p className="text-center text-cyan-300 mb-4 text-lg">
                        Players: {game.user1?.username} vs{" "}
                        {game.user2?.username}
                    </p>
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-3 glow-text">
                            ⏰ Time Remaining: {minutes}:
                            {seconds.toString().padStart(2, "0")}
                        </h3>
                        <p className="text-gray-400">
                            Prepare your strategy! The battle begins
                            automatically when the timer reaches zero.
                        </p>
                    </div>
                    <div className="text-center">
                        <button
                            onClick={abortGame}
                            className="py-3 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                        >
                            Abort Game
                        </button>
                    </div>
                </div>
                <GameWithShapes
                    game={game}
                    currentUser={currentUser}
                    onCellClick={handleCellClick}
                    onShapeDrop={handleShapeDrop}
                    gridSize={60}
                />
            </div>
        );
    }

    // If game is fighting, show the fighting state
    if (game?.state === "fighting") {
        return (
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-cyan-500/30">
                <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400 glow-text">
                    ⚔️ Battle in Progress! ⚔️
                </h2>
                <div className="bg-gray-900 p-6 rounded-lg mb-6 border border-cyan-500/20">
                    <p className="text-center text-cyan-300 mb-6 text-lg">
                        Players: {game.user1?.username} vs{" "}
                        {game.user2?.username}
                    </p>
                    <div className="flex justify-center space-x-4">
                        {animationComplete && (
                            <button
                                onClick={restartGame}
                                className="py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                            >
                                🔄 Restart Game
                            </button>
                        )}
                        <button
                            onClick={abortGame}
                            className="py-3 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                        >
                            Abort Game
                        </button>
                    </div>
                </div>
                <GameCanvas
                    game={game}
                    currentUser={currentUser}
                    onCellClick={handleCellClick}
                    onAnimationComplete={handleAnimationComplete}
                    gridSize={60}
                />
            </div>
        );
    }

    return (
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-cyan-500/30">
            {isLoading ? (
                <div className="text-center py-8">
                    <h2 className="text-xl font-semibold text-cyan-400 animate-pulse">
                        Loading...
                    </h2>
                </div>
            ) : (
                <>
                    <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400 glow-text">
                        Create or Join Game
                    </h2>

                    {!gameId ? (
                        <div className="space-y-6">
                            <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500/20">
                                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                                    Create New Game
                                </h3>
                                <button
                                    onClick={createGame}
                                    disabled={isCreating || !currentUser}
                                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                                >
                                    {isCreating ? "Creating..." : "Create Game"}
                                </button>
                            </div>

                            <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500/20">
                                <h3 className="text-xl font-semibold mb-4 text-cyan-300">
                                    Join Existing Game
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Enter Game ID"
                                    className="w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 mb-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
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
                                    className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium rounded-lg hover:from-green-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
                                >
                                    Join Game
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gray-900 p-6 rounded-lg border border-cyan-500/20">
                            <h3 className="text-2xl font-semibold mb-4 text-cyan-400 glow-text">
                                Game Lobby
                            </h3>
                            <p className="mb-6 text-cyan-300">
                                <strong>Game ID:</strong>{" "}
                                <span className="text-cyan-400 font-mono">
                                    {gameId}
                                </span>
                            </p>

                            <div className="mb-6">
                                <h4 className="text-lg font-medium mb-4 text-cyan-300">
                                    Players:
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg border border-cyan-500/30">
                                        <span className="font-medium text-cyan-300">
                                            {game?.user1?.username ||
                                                "Player 1"}
                                        </span>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                game?.user1?.ready
                                                    ? "bg-green-500/20 text-green-400 border border-green-500/50"
                                                    : "bg-gray-700 text-gray-400 border border-gray-600"
                                            }`}
                                        >
                                            {game?.user1?.ready
                                                ? "✓ Ready"
                                                : "○ Not Ready"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg border border-cyan-500/30">
                                        <span className="font-medium text-cyan-300">
                                            {game?.user2?.username ||
                                                "Waiting for Player 2..."}
                                        </span>
                                        {game?.user2 && (
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                    game?.user2?.ready
                                                        ? "bg-green-500/20 text-green-400 border border-green-500/50"
                                                        : "bg-gray-700 text-gray-400 border border-gray-600"
                                                }`}
                                            >
                                                {game?.user2?.ready
                                                    ? "✓ Ready"
                                                    : "○ Not Ready"}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {game?.user2 && (
                                <div className="mb-6">
                                    <button
                                        onClick={toggleReady}
                                        className={`w-full py-3 px-6 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 ${
                                            currentUserReady
                                                ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-500 hover:to-orange-500 focus:ring-yellow-400 shadow-lg shadow-yellow-500/25"
                                                : "bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-500 hover:to-teal-500 focus:ring-green-400 shadow-lg shadow-green-500/25"
                                        }`}
                                    >
                                        {currentUserReady
                                            ? "Cancel Ready"
                                            : "Ready to Start"}
                                    </button>

                                    {game?.user1?.ready &&
                                        game?.user2?.ready && (
                                            <p className="text-center text-cyan-400 font-medium mt-4 animate-pulse glow-text">
                                                Starting game...
                                            </p>
                                        )}
                                </div>
                            )}

                            {waitingForPlayer && !game?.user2 && (
                                <div className="mb-6 bg-cyan-900/20 p-4 rounded-lg border border-cyan-500/30">
                                    <p className="text-cyan-300 mb-2">
                                        Waiting for another player to join...
                                    </p>
                                    <p className="text-cyan-400">
                                        Share this Game ID with your friend:{" "}
                                        <strong className="font-mono text-cyan-300">
                                            {gameId}
                                        </strong>
                                    </p>
                                </div>
                            )}

                            <div className="text-center">
                                <button
                                    onClick={abortGame}
                                    className="py-3 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
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
