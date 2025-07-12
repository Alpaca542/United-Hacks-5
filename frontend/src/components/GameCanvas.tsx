import React, { useState, useEffect } from "react";

// Constant for player editable rows
const PLAYER_EDITABLE_ROWS = 6;

interface GameCanvasProps {
    game: {
        id: string;
        state: string;
        user1: { uid: string; username: string; ready: boolean } | null;
        user2: { uid: string; username: string; ready: boolean } | null;
        grid: { [key: string]: number[] };
        finalGrid?: { [key: string]: number[] };
        winner?: string;
    };
    currentUser: { uid: string } | null;
    onCellClick: (row: number, col: number) => void;
    onAnimationComplete?: () => void;
    gridSize?: number;
}

const GameCanvas: React.FC<GameCanvasProps> = ({
    game,
    currentUser,
    onCellClick,
    onAnimationComplete,
    gridSize = 50,
}) => {
    const [animationGrid, setAnimationGrid] = useState<{
        [key: string]: number[];
    } | null>(null);
    const [animationGeneration, setAnimationGeneration] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    var MouseDown = false;
    window.addEventListener("mousedown", () => (MouseDown = true));
    window.addEventListener("mouseup", () => (MouseDown = false));

    // Conway's Game of Life rules
    const runGameOfLifeStep = (currentGrid: {
        [key: string]: number[];
    }): { [key: string]: number[] } => {
        const newGrid: { [key: string]: number[] } = {};

        for (let row = 0; row < gridSize; row++) {
            newGrid[`row${row}`] = [];
            for (let col = 0; col < gridSize; col++) {
                const neighbors = countNeighbors(currentGrid, row, col);
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
                            col
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

        return newGrid;
    };

    const countNeighbors = (
        grid: { [key: string]: number[] },
        row: number,
        col: number
    ): number => {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                const newRow = row + i;
                const newCol = col + j;
                if (
                    newRow >= 0 &&
                    newRow < gridSize &&
                    newCol >= 0 &&
                    newCol < gridSize
                ) {
                    const cellValue = grid[`row${newRow}`]?.[newCol] || 0;
                    if (cellValue > 0) count++;
                }
            }
        }
        return count;
    };

    const getNeighborColors = (
        grid: { [key: string]: number[] },
        row: number,
        col: number
    ): { player1: number; player2: number } => {
        let player1 = 0,
            player2 = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                const newRow = row + i;
                const newCol = col + j;
                if (
                    newRow >= 0 &&
                    newRow < gridSize &&
                    newCol >= 0 &&
                    newCol < gridSize
                ) {
                    const cellValue = grid[`row${newRow}`]?.[newCol] || 0;
                    if (cellValue === 1) player1++;
                    else if (cellValue === 2) player2++;
                }
            }
        }
        return { player1, player2 };
    };

    // Start animation when game enters fighting state
    useEffect(() => {
        if (
            game.state === "fighting" &&
            !isAnimating &&
            animationGeneration < 10
        ) {
            setIsAnimating(true);
            setAnimationGrid(JSON.parse(JSON.stringify(game.grid))); // Deep copy
            setAnimationGeneration(0);
        }
    }, [game.state, isAnimating, game.grid]);

    // Run animation steps
    useEffect(() => {
        if (isAnimating && animationGrid && animationGeneration < 1000) {
            const timer = setTimeout(() => {
                const nextGrid = runGameOfLifeStep(animationGrid);
                setAnimationGrid(nextGrid);
                setAnimationGeneration((prev) => prev + 1);
            }, 50); // 50ms between generations for smooth animation

            return () => clearTimeout(timer);
        } else if (isAnimating && animationGeneration >= 1000) {
            setIsAnimating(false);
            if (onAnimationComplete) {
                onAnimationComplete();
            }
        }
    }, [isAnimating, animationGrid, animationGeneration, onAnimationComplete]);

    // Determine player number
    const getPlayerNumber = (): number => {
        if (!currentUser) return 0;
        if (game.user1?.uid === currentUser.uid) return 1;
        if (game.user2?.uid === currentUser.uid) return 2;
        return 0;
    };

    const playerNumber = getPlayerNumber();

    // Handle cell click
    const handleCellClick = (row: number, col: number) => {
        if (playerNumber === 0) return; // Not a player in this game

        // Check if player can edit this row
        const canEdit =
            (playerNumber === 1 && row < PLAYER_EDITABLE_ROWS) ||
            (playerNumber === 2 && row >= gridSize - PLAYER_EDITABLE_ROWS);

        if (!canEdit) return; // Player cannot edit this row

        onCellClick(row, col);
    };

    // Get cell value from grid (use animation grid if animating)
    const getCellValue = (row: number, col: number): number => {
        const currentGrid =
            isAnimating && animationGrid ? animationGrid : game.grid;
        const rowData = currentGrid[`row${row}`];
        return rowData ? rowData[col] || 0 : 0;
    };

    // Disable cell editing during animation or when game is not in waiting/started state
    const canEditGrid = game.state === "waiting" || game.state === "started";

    // Render the grid
    const renderGrid = () => {
        const rows = [];
        for (let row = 0; row < gridSize; row++) {
            const cols = [];
            for (let col = 0; col < gridSize; col++) {
                const cellValue = getCellValue(row, col);

                // Check if current player can edit this row
                const canPlayerEdit =
                    canEditGrid &&
                    ((playerNumber === 1 && row < PLAYER_EDITABLE_ROWS) ||
                        (playerNumber === 2 &&
                            row >= gridSize - PLAYER_EDITABLE_ROWS));

                // Determine background color
                let backgroundColor = "#fff";
                if (cellValue === 1) {
                    backgroundColor = "#ffcccc";
                } else if (cellValue === 2) {
                    backgroundColor = "#ccccff";
                } else if (canPlayerEdit) {
                    // Highlight editable area for current player
                    backgroundColor =
                        playerNumber === 1 ? "#fff5f5" : "#f5f5ff";
                } else {
                    // Neutral area or other player's area
                    backgroundColor = "#f9f9f9";
                }

                cols.push(
                    <div
                        key={`${row}-${col}`}
                        className="grid-cell"
                        onMouseEnter={() => {
                            if (MouseDown) {
                                handleCellClick(row, col);
                            }
                        }}
                        onClick={() => {
                            handleCellClick(row, col);
                        }}
                        style={{
                            width: "20px",
                            height: "20px",
                            border: "1px solid #ccc",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: canPlayerEdit ? "pointer" : "not-allowed",
                            fontSize: "12px",
                            backgroundColor,
                        }}
                    >
                        {cellValue !== 0 ? cellValue : ""}
                    </div>
                );
            }
            rows.push(
                <div key={row} className="grid-row" style={{ display: "flex" }}>
                    {cols}
                </div>
            );
        }
        return rows;
    };

    return (
        <div className="game-canvas">
            <div className="player-info" style={{ marginBottom: "10px" }}>
                <p>You are Player {playerNumber}</p>
                {canEditGrid && (
                    <>
                        <p>
                            You can edit rows{" "}
                            {playerNumber === 1
                                ? `0-${PLAYER_EDITABLE_ROWS - 1}`
                                : `${gridSize - PLAYER_EDITABLE_ROWS}-${
                                      gridSize - 1
                                  }`}
                        </p>
                        <p>Click cells in your area to place your number</p>
                    </>
                )}
                {isAnimating && (
                    <div className="animation-status">
                        <p>
                            <strong>Conway's Game of Life Simulation</strong>
                        </p>
                        <p>Generation: {animationGeneration} / 1000</p>
                        <div
                            className="progress-bar"
                            style={{
                                width: "200px",
                                height: "10px",
                                backgroundColor: "#ddd",
                                borderRadius: "5px",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                className="progress-fill"
                                style={{
                                    width: `${
                                        (animationGeneration / 1000) * 100
                                    }%`,
                                    height: "100%",
                                    backgroundColor: "#4CAF50",
                                    transition: "width 0.1s ease",
                                }}
                            />
                        </div>
                    </div>
                )}
                {game.state === "fighting" && !isAnimating && game.winner && (
                    <div className="winner-announcement">
                        <h3>🏆 Battle Complete! 🏆</h3>
                        {game.winner === "tie" ? (
                            <div>
                                <p>
                                    <strong>It's a tie!</strong>
                                </p>
                                <p>Both players have equal cell counts.</p>
                                <p>
                                    🤝 Great game, {game.user1?.username} and{" "}
                                    {game.user2?.username}! 🤝
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p>
                                    <strong>
                                        Player{" "}
                                        {game.winner === "player1" ? "1" : "2"}{" "}
                                        wins!
                                    </strong>
                                </p>
                                {game.winner === "player1" && game.user1 && (
                                    <p>
                                        🎉 Congratulations {game.user1.username}
                                        ! 🎉
                                    </p>
                                )}
                                {game.winner === "player2" && game.user2 && (
                                    <p>
                                        🎉 Congratulations {game.user2.username}
                                        ! 🎉
                                    </p>
                                )}
                                <p>
                                    🏆 Victory achieved through superior
                                    strategy! 🏆
                                </p>
                            </div>
                        )}
                    </div>
                )}
                {game.state === "fighting" && !isAnimating && !game.winner && (
                    <div className="winner-announcement">
                        <h3>⚔️ Battle Processing... ⚔️</h3>
                        <p>Server is calculating the final results...</p>
                    </div>
                )}
            </div>
            <div
                className="grid-container"
                style={{ display: "inline-block", border: "2px solid #333" }}
            >
                {renderGrid()}
            </div>
        </div>
    );
};

export default GameCanvas;
