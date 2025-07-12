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
                grid: initializeGrid(50),
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
                currentGrid[`row${row}`] = Array(50).fill(0);
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
            <div className="game-started">
                <h2>Game Started!</h2>
                <div className="game-info">
                    <p>
                        Players: {game.user1?.username} vs{" "}
                        {game.user2?.username}
                    </p>
                    <div className="countdown-timer">
                        <h3>
                            ⏰ Time Remaining: {minutes}:
                            {seconds.toString().padStart(2, "0")}
                        </h3>
                        <p>
                            Prepare your strategy! The battle begins
                            automatically when the timer reaches zero.
                        </p>
                    </div>
                    <div className="game-controls">
                        <button onClick={abortGame} className="abort-button">
                            Abort Game
                        </button>
                    </div>
                </div>
                <GameCanvas
                    game={game}
                    currentUser={currentUser}
                    onCellClick={handleCellClick}
                    gridSize={50}
                />
            </div>
        );
    }

    // If game is fighting, show the fighting state
    if (game?.state === "fighting") {
        return (
            <div className="game-fighting">
                <h2>⚔️ Battle in Progress! ⚔️</h2>
                <div className="game-info">
                    <p>
                        Players: {game.user1?.username} vs{" "}
                        {game.user2?.username}
                    </p>
                    <div className="game-controls">
                        {animationComplete && (
                            <button
                                onClick={restartGame}
                                className="restart-button"
                            >
                                🔄 Restart Game
                            </button>
                        )}
                        <button onClick={abortGame} className="abort-button">
                            Abort Game
                        </button>
                    </div>
                </div>
                <GameCanvas
                    game={game}
                    currentUser={currentUser}
                    onCellClick={handleCellClick}
                    onAnimationComplete={handleAnimationComplete}
                    gridSize={50}
                />
            </div>
        );
    }

    return (
        <div className="creating-game">
            {isLoading ? (
                <div className="loading">
                    <h2>Loading...</h2>
                </div>
            ) : (
                <>
                    <h2>Create or Join Game</h2>

                    {!gameId ? (
                        <div className="game-setup">
                            <div className="create-game-section">
                                <h3>Create New Game</h3>
                                <button
                                    onClick={createGame}
                                    disabled={isCreating || !currentUser}
                                    className="create-button"
                                >
                                    {isCreating ? "Creating..." : "Create Game"}
                                </button>
                            </div>

                            <div className="join-game-section">
                                <h3>Join Existing Game</h3>
                                <input
                                    type="text"
                                    placeholder="Enter Game ID"
                                    className="game-id-input"
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
                                            ".game-id-input"
                                        ) as HTMLInputElement;
                                        const gameIdToJoin =
                                            input?.value.trim();
                                        if (gameIdToJoin) {
                                            joinGame(gameIdToJoin);
                                        }
                                    }}
                                    disabled={!currentUser}
                                    className="join-button"
                                >
                                    Join Game
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="game-lobby">
                            <h3>Game Lobby</h3>
                            <p>
                                <strong>Game ID:</strong> {gameId}
                            </p>

                            <div className="players-section">
                                <h4>Players:</h4>
                                <div className="player-list">
                                    <div className="player">
                                        <span>
                                            {game?.user1?.username ||
                                                "Player 1"}
                                        </span>
                                        <span
                                            className={`ready-status ${
                                                game?.user1?.ready
                                                    ? "ready"
                                                    : "not-ready"
                                            }`}
                                        >
                                            {game?.user1?.ready
                                                ? "✓ Ready"
                                                : "○ Not Ready"}
                                        </span>
                                    </div>
                                    <div className="player">
                                        <span>
                                            {game?.user2?.username ||
                                                "Waiting for Player 2..."}
                                        </span>
                                        {game?.user2 && (
                                            <span
                                                className={`ready-status ${
                                                    game?.user2?.ready
                                                        ? "ready"
                                                        : "not-ready"
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
                                <div className="ready-section">
                                    <button
                                        onClick={toggleReady}
                                        className={`ready-button ${
                                            currentUserReady
                                                ? "ready"
                                                : "not-ready"
                                        }`}
                                    >
                                        {currentUserReady
                                            ? "Cancel Ready"
                                            : "Ready to Start"}
                                    </button>

                                    {game?.user1?.ready &&
                                        game?.user2?.ready && (
                                            <p className="starting-message">
                                                Starting game...
                                            </p>
                                        )}
                                </div>
                            )}

                            {waitingForPlayer && !game?.user2 && (
                                <div className="waiting-section">
                                    <p>Waiting for another player to join...</p>
                                    <p>
                                        Share this Game ID with your friend:{" "}
                                        <strong>{gameId}</strong>
                                    </p>
                                </div>
                            )}

                            <div className="game-controls">
                                <button
                                    onClick={abortGame}
                                    className="abort-button"
                                >
                                    Abort Game
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}

            <style>{`
                .creating-game {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }
                
                .loading {
                    text-align: center;
                    padding: 40px;
                }
                
                .game-setup {
                    display: flex;
                    gap: 30px;
                    margin-bottom: 30px;
                }
                
                .create-game-section,
                .join-game-section {
                    flex: 1;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                }
                
                .create-button,
                .join-button,
                .ready-button,
                .abort-button,
                .fight-button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                    margin-right: 10px;
                }
                
                .create-button {
                    background-color: #4CAF50;
                    color: white;
                }
                
                .join-button {
                    background-color: #2196F3;
                    color: white;
                }
                
                .ready-button.ready {
                    background-color: #f44336;
                    color: white;
                }
                
                .ready-button.not-ready {
                    background-color: #4CAF50;
                    color: white;
                }
                
                .fight-button {
                    background-color: #FF9800;
                    color: white;
                }
                
                .abort-button {
                    background-color: #f44336;
                    color: white;
                    margin-top: 20px;
                }
                
                .game-id-input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 16px;
                }
                
                .game-lobby {
                    text-align: center;
                }
                
                .players-section {
                    margin: 20px 0;
                }
                
                .player-list {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin: 10px 0;
                }
                
                .player {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
                
                .ready-status.ready {
                    color: #4CAF50;
                    font-weight: bold;
                }
                
                .ready-status.not-ready {
                    color: #f44336;
                }
                
                .starting-message {
                    color: #4CAF50;
                    font-weight: bold;
                    font-size: 18px;
                    margin-top: 20px;
                }
                
                .waiting-section {
                    margin-top: 20px;
                    padding: 20px;
                    background-color: #f0f0f0;
                    border-radius: 8px;
                }
                
                .game-controls {
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                }
                
                .game-started {
                    text-align: center;
                }
                
                .game-fighting {
                    text-align: center;
                }
                
                .game-info {
                    margin-bottom: 20px;
                    font-size: 18px;
                }
                
                .countdown-timer {
                    background-color: #fff3cd;
                    border: 2px solid #ffeaa7;
                    border-radius: 10px;
                    padding: 15px;
                    margin: 20px 0;
                }
                
                .countdown-timer h3 {
                    color: #d35400;
                    margin: 0 0 10px 0;
                    font-size: 24px;
                }
                
                .restart-button {
                    background-color: #27ae60;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-right: 10px;
                    transition: background-color 0.3s;
                }
                
                .restart-button:hover {
                    background-color: #219a52;
                }
                
                .fight-button {
                    background-color: #e74c3c;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-right: 10px;
                    transition: background-color 0.3s;
                }
                
                .fight-button:hover {
                    background-color: #c0392b;
                }
                
                .animation-status {
                    background-color: #e8f5e8;
                    border: 2px solid #4CAF50;
                    border-radius: 10px;
                    padding: 15px;
                    margin: 15px 0;
                }
                
                .winner-announcement {
                    background-color: #fff9c4;
                    border: 3px solid #f39c12;
                    border-radius: 15px;
                    padding: 20px;
                    margin: 20px 0;
                    text-align: center;
                }
                
                .winner-announcement h3 {
                    color: #d35400;
                    margin: 0 0 10px 0;
                    font-size: 24px;
                }
                
                button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                
                button:hover:not(:disabled) {
                    opacity: 0.8;
                }
            `}</style>
        </div>
    );
};

export default CreatingGame;
