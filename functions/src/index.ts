import { onCall, HttpsError } from "firebase-functions/v2/https";
import { logger } from "firebase-functions/v2";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";

// Initialize Firebase Admin
initializeApp();
const db = getFirestore();

interface CreateGameData {
    userId: string;
    username: string;
}

interface JoinGameData {
    gameId: string;
    userId: string;
    username: string;
}

// Determine winner based on live cells
const determineWinner = (grid: { [key: string]: number[] }): string => {
    let player1Count = 0;
    let player2Count = 0;

    for (const rowKey in grid) {
        const row = grid[rowKey];
        for (const cell of row) {
            if (cell === 1) player1Count++;
            else if (cell === 2) player2Count++;
        }
    }

    // Check if a player has no cells left (automatic win)
    if (player1Count === 0 && player2Count === 0) return "tie";
    if (player1Count === 0) return "player2";
    if (player2Count === 0) return "player1";

    // Regular winner determination based on cell count
    if (player1Count > player2Count) return "player1";
    if (player2Count > player1Count) return "player2";
    return "tie";
};

export const createGame = onCall(
    {
        cors: true,
        timeoutSeconds: 60,
        memory: "256MiB",
    },
    async (request) => {
        try {
            const { userId, username } = request.data as CreateGameData;

            if (!userId || !username) {
                throw new HttpsError(
                    "invalid-argument",
                    "User ID and username are required"
                );
            }

            const newGame = {
                state: "waiting",
                user1: {
                    uid: userId,
                    username: username,
                    ready: false,
                },
                user2: null,
                grid: initializeGrid(60),
                createdAt: new Date(),
                startedAt: null,
                fightingStartedAt: null,
                winner: null,
                timerStarted: false,
            };

            const gameRef = await db.collection("games").add(newGame);

            logger.info(`Game created with ID: ${gameRef.id}`);

            return { gameId: gameRef.id, success: true };
        } catch (error) {
            logger.error("Error creating game:", error);
            throw new HttpsError("internal", "Failed to create game");
        }
    }
);

export const joinGame = onCall(
    {
        cors: true,
        timeoutSeconds: 60,
        memory: "256MiB",
    },
    async (request) => {
        try {
            const { gameId, userId, username } = request.data as JoinGameData;

            if (!gameId || !userId || !username) {
                throw new HttpsError(
                    "invalid-argument",
                    "Game ID, user ID, and username are required"
                );
            }

            const gameRef = db.collection("games").doc(gameId);
            const gameDoc = await gameRef.get();

            if (!gameDoc.exists) {
                throw new HttpsError("not-found", "Game not found");
            }

            const gameData = gameDoc.data();

            if (gameData?.user2) {
                throw new HttpsError(
                    "failed-precondition",
                    "Game is already full"
                );
            }

            if (gameData?.state !== "waiting") {
                throw new HttpsError(
                    "failed-precondition",
                    "Game is not accepting new players"
                );
            }

            await gameRef.update({
                user2: {
                    uid: userId,
                    username: username,
                    ready: false,
                },
            });

            logger.info(`User ${userId} joined game ${gameId}`);

            return { success: true };
        } catch (error) {
            logger.error("Error joining game:", error);
            if (error instanceof HttpsError) {
                throw error;
            }
            throw new HttpsError("internal", "Failed to join game");
        }
    }
);

// Manual function to start the fighting phase
export const startFightingPhase = onCall(
    {
        cors: true,
        timeoutSeconds: 300, // 5 minutes timeout for the simulation
        memory: "512MiB",
    },
    async (request) => {
        try {
            const { gameId } = request.data as { gameId: string };

            if (!gameId) {
                throw new HttpsError("invalid-argument", "Game ID is required");
            }

            const gameRef = db.collection("games").doc(gameId);
            const gameDoc = await gameRef.get();

            if (!gameDoc.exists) {
                throw new HttpsError("not-found", "Game not found");
            }

            const gameData = gameDoc.data();

            if (gameData?.state !== "started") {
                throw new HttpsError(
                    "failed-precondition",
                    "Game is not in started state"
                );
            }

            logger.info(`Game ${gameId} transitioning to fighting`);

            // Run Conway's Game of Life simulation
            const finalGrid = runGameOfLife(gameData.grid, 1000);
            const winner = determineWinner(finalGrid);

            await gameRef.update({
                state: "fighting",
                fightingStartedAt: new Date(),
                finalGrid: finalGrid,
                winner: winner,
            });

            logger.info(
                `Game ${gameId} transition to fighting complete, winner: ${winner}`
            );

            return { success: true, winner };
        } catch (error) {
            logger.error("Error starting fighting phase:", error);
            if (error instanceof HttpsError) {
                throw error;
            }
            throw new HttpsError("internal", "Failed to start fighting phase");
        }
    }
);

// Server-side timer function to automatically transition to fighting after 2 minutes
export const scheduleGameTransition = onCall(
    {
        cors: true,
        timeoutSeconds: 180, // 3 minutes timeout (longer than the 2-minute game timer)
        memory: "256MiB",
    },
    async (request) => {
        try {
            const { gameId } = request.data as { gameId: string };

            if (!gameId) {
                throw new HttpsError("invalid-argument", "Game ID is required");
            }

            const gameRef = db.collection("games").doc(gameId);
            const gameDoc = await gameRef.get();

            if (!gameDoc.exists) {
                throw new HttpsError("not-found", "Game not found");
            }

            const gameData = gameDoc.data();

            if (gameData?.state !== "started") {
                throw new HttpsError(
                    "failed-precondition",
                    "Game is not in started state"
                );
            }

            // Check if game was already started and has a timer running
            if (gameData.timerStarted) {
                return { success: false, message: "Timer already running" };
            }

            // Mark that timer has been started to prevent duplicate timers
            await gameRef.update({
                timerStarted: true,
            });

            logger.info(
                `Game ${gameId} timer started, will transition to fighting in 2 minutes`
            );

            // Wait 2 minutes then transition to fighting
            setTimeout(async () => {
                try {
                    const currentGameDoc = await gameRef.get();
                    const currentGameData = currentGameDoc.data();

                    // Only transition if still in started state and timer is still active
                    if (
                        currentGameData?.state === "started" &&
                        currentGameData?.timerStarted
                    ) {
                        logger.info(
                            `Game ${gameId} transitioning to fighting after timer`
                        );

                        // Run Conway's Game of Life simulation
                        const finalGrid = runGameOfLife(
                            currentGameData.grid,
                            1000
                        );
                        const winner = determineWinner(finalGrid);

                        await gameRef.update({
                            state: "fighting",
                            fightingStartedAt: new Date(),
                            finalGrid: finalGrid,
                            winner: winner,
                            timerStarted: false, // Reset timer flag
                        });

                        logger.info(
                            `Game ${gameId} transitioned to fighting, winner: ${winner}`
                        );
                    }
                } catch (error) {
                    logger.error(
                        `Error in scheduled transition for game ${gameId}:`,
                        error
                    );
                }
            }, 2 * 60 * 1000); // 2 minutes

            return { success: true, message: "Timer started successfully" };
        } catch (error) {
            logger.error("Error scheduling game transition:", error);
            if (error instanceof HttpsError) {
                throw error;
            }
            throw new HttpsError(
                "internal",
                "Failed to schedule game transition"
            );
        }
    }
);

// Conway's Game of Life simulation
const runGameOfLife = (
    initialGrid: { [key: string]: number[] },
    generations: number
): { [key: string]: number[] } => {
    let currentGrid = JSON.parse(JSON.stringify(initialGrid)); // Deep copy
    const gridSize = Object.keys(currentGrid).length;
    const gridHistory: { [key: string]: number[] }[] = [];

    for (let gen = 0; gen < generations; gen++) {
        // Check if we've reached a stable state before computing next step
        if (hasReachedStableState(currentGrid, gridHistory, gridSize)) {
            logger.info(
                `Game of Life simulation stopped early at generation ${gen} due to stable state or oscillation`
            );
            break;
        }

        const newGrid: { [key: string]: number[] } = {};

        for (let row = 0; row < gridSize; row++) {
            newGrid[`row${row}`] = [];
            for (let col = 0; col < gridSize; col++) {
                const neighbors = countNeighbors(
                    currentGrid,
                    row,
                    col,
                    gridSize
                );
                const currentCell = currentGrid[`row${row}`]?.[col] || 0;

                if (currentCell > 0) {
                    // Cell is alive - survives with 2 or 3 neighbors
                    newGrid[`row${row}`][col] =
                        neighbors === 2 || neighbors === 3 ? currentCell : 0;
                } else {
                    // Cell is dead - becomes alive with exactly 3 neighbors
                    if (neighbors === 3) {
                        // Determine which player's cell should be born based on neighbors
                        const neighborColors = getNeighborColors(
                            currentGrid,
                            row,
                            col,
                            gridSize
                        );
                        // Use the color with more neighbors (most common)
                        if (neighborColors.player1 > neighborColors.player2) {
                            newGrid[`row${row}`][col] = 1;
                        } else if (
                            neighborColors.player2 > neighborColors.player1
                        ) {
                            newGrid[`row${row}`][col] = 2;
                        } else {
                            // Equal neighbors - default to player 1 or random choice
                            newGrid[`row${row}`][col] =
                                Math.random() > 0.5 ? 1 : 2;
                        }
                    } else {
                        newGrid[`row${row}`][col] = 0;
                    }
                }
            }
        }

        // Update grid history - keep only the last 2 grids
        gridHistory.push(JSON.parse(JSON.stringify(currentGrid)));
        if (gridHistory.length > 2) {
            gridHistory.shift(); // Remove oldest grid
        }

        currentGrid = newGrid;
    }

    return currentGrid;
};

// Function to compare two grids for equality
const gridsAreEqual = (
    grid1: { [key: string]: number[] },
    grid2: { [key: string]: number[] },
    gridSize: number
): boolean => {
    for (let row = 0; row < gridSize; row++) {
        const rowKey = `row${row}`;
        const row1 = grid1[rowKey] || [];
        const row2 = grid2[rowKey] || [];

        if (row1.length !== row2.length) return false;

        for (let col = 0; col < gridSize; col++) {
            if ((row1[col] || 0) !== (row2[col] || 0)) {
                return false;
            }
        }
    }
    return true;
};

// Function to check if current grid matches any of the last two grids
const hasReachedStableState = (
    currentGrid: { [key: string]: number[] },
    gridHistory: { [key: string]: number[] }[],
    gridSize: number
): boolean => {
    if (gridHistory.length === 0) return false;

    // Check if current grid matches the previous grid (stable state)
    if (
        gridsAreEqual(
            currentGrid,
            gridHistory[gridHistory.length - 1],
            gridSize
        )
    ) {
        return true;
    }

    // Check if current grid matches the grid from 2 steps ago (oscillation)
    if (
        gridHistory.length >= 2 &&
        gridsAreEqual(
            currentGrid,
            gridHistory[gridHistory.length - 2],
            gridSize
        )
    ) {
        return true;
    }

    return false;
};

// Count living neighbors
const countNeighbors = (
    grid: { [key: string]: number[] },
    row: number,
    col: number,
    gridSize: number
): number => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            // Handle looping board
            const newRow = (row + i + gridSize) % gridSize;
            const newCol = (col + j + gridSize) % gridSize;
            const cellValue = grid[`row${newRow}`]?.[newCol] || 0;
            if (cellValue > 0) count++;
        }
    }
    return count;
};

// Get neighbor colors for determining new cell color
const getNeighborColors = (
    grid: { [key: string]: number[] },
    row: number,
    col: number,
    gridSize: number
): { player1: number; player2: number } => {
    let player1 = 0,
        player2 = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            // Handle looping board
            const newRow = (row + i + gridSize) % gridSize;
            const newCol = (col + j + gridSize) % gridSize;
            const cellValue = grid[`row${newRow}`]?.[newCol] || 0;
            if (cellValue === 1) player1++;
            else if (cellValue === 2) player2++;
        }
    }
    return { player1, player2 };
};

const initializeGrid = (width: number): { [key: string]: number[] } => {
    const grid: { [key: string]: number[] } = {};
    for (let row = 0; row < width; row++) {
        grid[`row${row}`] = Array(width).fill(0);
    }
    return grid;
};
