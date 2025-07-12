import React, { useEffect, useRef, useState, useCallback } from "react";

interface GameCanvasProps {
    width?: number;
    height?: number;
    cellSize?: number;
}

const GameCanvas: React.FC<GameCanvasProps> = ({
    width = 800,
    height = 600,
    cellSize = 10,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [generation, setGeneration] = useState(0);

    const cols = Math.floor(width / cellSize);
    const rows = Math.floor(height / cellSize);

    // Initialize grid with hardcoded starting configuration
    const createInitialGrid = useCallback(() => {
        const grid = Array(rows)
            .fill(null)
            .map(() => Array(cols).fill(false));

        // Hardcoded starting configuration - Glider pattern
        const gliderPattern = [
            [1, 0],
            [2, 1],
            [0, 2],
            [1, 2],
            [2, 2],
        ];

        // Place glider in top-left area
        gliderPattern.forEach(([row, col]) => {
            if (row < rows && col < cols) {
                grid[row + 5][col + 5] = true;
            }
        });

        // Add a blinker pattern
        const blinkerPattern = [
            [0, 1],
            [1, 1],
            [2, 1],
        ];

        blinkerPattern.forEach(([row, col]) => {
            if (row + 10 < rows && col + 20 < cols) {
                grid[row + 10][col + 20] = true;
            }
        });

        // Add a block pattern (still life)
        const blockPattern = [
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 0],
            [1, 2],
            [2, 0],
            [2, 1],
            [2, 2],

            [0, 4],
            [0, 5],
            [0, 6],
            [1, 4],
            [1, 6],
            [2, 4],
            [2, 5],
            [2, 6],
        ];

        blockPattern.forEach(([row, col]) => {
            if (row + 15 < rows && col + 35 < cols) {
                grid[row + 15][col + 35] = true;
            }
        });

        return grid;
    }, [rows, cols]);

    const [grid, setGrid] = useState(createInitialGrid);

    // Count live neighbors for a cell
    const countNeighbors = (
        grid: boolean[][],
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
                    newRow < rows &&
                    newCol >= 0 &&
                    newCol < cols
                ) {
                    if (grid[newRow][newCol]) count++;
                }
            }
        }
        return count;
    };

    // Apply Conway's Game of Life rules
    const nextGeneration = useCallback(
        (currentGrid: boolean[][]): boolean[][] => {
            const newGrid = Array(rows)
                .fill(null)
                .map(() => Array(cols).fill(false));

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const neighbors = countNeighbors(currentGrid, row, col);
                    const isAlive = currentGrid[row][col];

                    if (isAlive) {
                        // Live cell with 2 or 3 neighbors survives
                        newGrid[row][col] = neighbors === 2 || neighbors === 3;
                    } else {
                        // Dead cell with exactly 3 neighbors becomes alive
                        newGrid[row][col] = neighbors === 3;
                    }
                }
            }

            return newGrid;
        },
        [rows, cols]
    );

    // Draw the grid on canvas
    const drawGrid = useCallback(
        (grid: boolean[][]) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // Clear canvas
            ctx.fillStyle = "#f0f0f0";
            ctx.fillRect(0, 0, width, height);

            // Draw cells
            ctx.fillStyle = "#333";
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    if (grid[row][col]) {
                        ctx.fillRect(
                            col * cellSize,
                            row * cellSize,
                            cellSize - 1,
                            cellSize - 1
                        );
                    }
                }
            }

            // Draw grid lines
            ctx.strokeStyle = "#ddd";
            ctx.lineWidth = 1;

            // Vertical lines
            for (let col = 0; col <= cols; col++) {
                ctx.beginPath();
                ctx.moveTo(col * cellSize, 0);
                ctx.lineTo(col * cellSize, height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let row = 0; row <= rows; row++) {
                ctx.beginPath();
                ctx.moveTo(0, row * cellSize);
                ctx.lineTo(width, row * cellSize);
                ctx.stroke();
            }
        },
        [width, height, cellSize, rows, cols]
    );

    // Game loop
    const gameLoop = useCallback(() => {
        setGrid((currentGrid) => {
            const newGrid = nextGeneration(currentGrid);
            setGeneration((gen) => gen + 1);
            return newGrid;
        });
    }, [nextGeneration]);

    // Start/stop the game
    const toggleGame = () => {
        setIsRunning(!isRunning);
    };

    // Reset the game
    const resetGame = () => {
        setIsRunning(false);
        setGeneration(0);
        setGrid(createInitialGrid());
    };

    // Animation loop
    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(gameLoop, 20); // Update every 200ms
            return () => clearInterval(interval);
        }
    }, [isRunning, gameLoop]);

    // Draw the grid when it changes
    useEffect(() => {
        drawGrid(grid);
    }, [grid, drawGrid]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Conway's Game of Life</h2>
            <div style={{ marginBottom: "20px" }}>
                <button
                    onClick={toggleGame}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        marginRight: "10px",
                        backgroundColor: isRunning ? "#ff4444" : "#44ff44",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button
                    onClick={resetGame}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#4444ff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Reset
                </button>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <strong>Generation: {generation}</strong>
            </div>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                style={{
                    border: "2px solid #333",
                    backgroundColor: "#f0f0f0",
                }}
            />
        </div>
    );
};

export default GameCanvas;
