import React, { useState, useEffect, useRef } from "react";

// Constant for player editable rows (increased proportionally for 60x60 board)
const PLAYER_EDITABLE_ROWS = 18;

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
    onShapeDrop?: (shape: any, dropRow: number, dropCol: number) => void;
    selectedShape?: any;
    onShapePlace?: (shape: any, row: number, col: number) => void;
}

const GameCanvas: React.FC<GameCanvasProps> = ({
    game,
    currentUser,
    onCellClick,
    onAnimationComplete,
    gridSize = 60,
    onShapeDrop,
    selectedShape,
    onShapePlace,
}) => {
    const [animationGrid, setAnimationGrid] = useState<{
        [key: string]: number[];
    } | null>(null);
    const [animationGeneration, setAnimationGeneration] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const mouseDownRef = useRef(false);
    const [gridHistory, setGridHistory] = useState<
        {
            [key: string]: number[];
        }[]
    >([]);

    // Ghost preview state
    const [ghostPosition, setGhostPosition] = useState<{
        row: number;
        col: number;
    } | null>(null);

    // Preview functionality
    const [previewGrid, setPreviewGrid] = useState<{
        [key: string]: number[];
    } | null>(null);
    const [previewGeneration, setPreviewGeneration] = useState(0);
    const [isPreviewMode, setIsPreviewMode] = useState(false);
    const [previewHistory, setPreviewHistory] = useState<
        {
            [key: string]: number[];
        }[]
    >([]);
    const [isPreviewRunning, setIsPreviewRunning] = useState(false);
    const [previewInitialGrid, setPreviewInitialGrid] = useState<{
        [key: string]: number[];
    } | null>(null);

    // Set up mouse and keyboard event listeners
    useEffect(() => {
        const handleMouseDown = () => {
            mouseDownRef.current = true;
        };

        const handleMouseUp = () => {
            mouseDownRef.current = false;
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            // Press Enter to exit shape placement mode
            if (e.key === "Escape" && selectedShape) {
                e.preventDefault();
                // Clear ghost position when exiting shape mode
                setGhostPosition(null);
                // You might want to call a parent callback here to clear the selected shape
                // For now, we'll just clear the ghost position
            }
        };

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("dragend", handleMouseUp);
        window.addEventListener("keydown", handleKeyDown);

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("dragend", handleMouseUp);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedShape]);

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

    // Function to compare two grids for equality
    const gridsAreEqual = (
        grid1: { [key: string]: number[] },
        grid2: { [key: string]: number[] }
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
    const hasReachedStableState = (currentGrid: {
        [key: string]: number[];
    }): boolean => {
        if (gridHistory.length === 0) return false;

        // Check if current grid matches the previous grid (stable state)
        if (gridsAreEqual(currentGrid, gridHistory[gridHistory.length - 1])) {
            return true;
        }

        // Check if current grid matches the grid from 2 steps ago (oscillation)
        if (
            gridHistory.length >= 2 &&
            gridsAreEqual(currentGrid, gridHistory[gridHistory.length - 2])
        ) {
            return true;
        }

        return false;
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
                // Handle looping board
                const newRow = (row + i + gridSize) % gridSize;
                const newCol = (col + j + gridSize) % gridSize;
                const cellValue = grid[`row${newRow}`]?.[newCol] || 0;
                if (cellValue > 0) count++;
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
            setGridHistory([]); // Reset grid history for new animation
        }
    }, [game.state, isAnimating, game.grid]);

    // Run animation steps
    useEffect(() => {
        if (isAnimating && animationGrid && animationGeneration < 1000) {
            const timer = setTimeout(() => {
                // Check if we've reached a stable state before computing next step
                if (hasReachedStableState(animationGrid)) {
                    setIsAnimating(false);
                    if (onAnimationComplete) {
                        onAnimationComplete();
                    }
                    return;
                }

                // Check for winner before computing next step
                const winner = checkForWinner(animationGrid);
                if (winner) {
                    setIsAnimating(false);
                    if (onAnimationComplete) {
                        onAnimationComplete();
                    }
                    return;
                }

                const nextGrid = runGameOfLifeStep(animationGrid);

                // Update grid history - keep only the last 2 grids
                setGridHistory((prev) => {
                    const newHistory = [
                        ...prev,
                        JSON.parse(JSON.stringify(animationGrid)),
                    ];
                    return newHistory.slice(-2); // Keep only last 2 grids
                });

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
    }, [
        isAnimating,
        animationGrid,
        animationGeneration,
        onAnimationComplete,
        gridHistory,
    ]);

    // Preview functionality
    const startPreview = () => {
        const initialGrid = JSON.parse(JSON.stringify(game.grid));
        setIsPreviewMode(true);
        setPreviewGrid(initialGrid);
        setPreviewInitialGrid(initialGrid);
        setPreviewGeneration(0);
        setPreviewHistory([initialGrid]);
        setIsPreviewRunning(true);
    };

    const stopPreview = () => {
        setIsPreviewMode(false);
        setPreviewGrid(null);
        setPreviewInitialGrid(null);
        setPreviewGeneration(0);
        setPreviewHistory([]);
        setIsPreviewRunning(false);
    };

    const pausePreview = () => {
        setIsPreviewRunning(false);
    };

    const resumePreview = () => {
        setIsPreviewRunning(true);
    };

    const resetPreview = () => {
        if (previewInitialGrid) {
            setPreviewGrid(JSON.parse(JSON.stringify(previewInitialGrid)));
            setPreviewGeneration(0);
            setPreviewHistory([JSON.parse(JSON.stringify(previewInitialGrid))]);
            setIsPreviewRunning(false);
        }
    };

    const stepForwardPreview = () => {
        if (!previewGrid) return;
        runPreviewStep();
    };

    const stepBackwardPreview = () => {
        if (previewHistory.length > 1) {
            const previousHistory = [...previewHistory];
            previousHistory.pop(); // Remove current state
            const previousGrid = previousHistory[previousHistory.length - 1];

            setPreviewGrid(JSON.parse(JSON.stringify(previousGrid)));
            setPreviewHistory(previousHistory);
            setPreviewGeneration(Math.max(0, previewGeneration - 1));
            setIsPreviewRunning(false);
        }
    };

    const runPreviewStep = () => {
        if (!previewGrid) return;

        // Stop at 200 generations
        if (previewGeneration >= 200) {
            setIsPreviewRunning(false);
            return;
        }

        // Check if we've reached a stable state using preview history
        // if (previewHistory.length > 1) {
        //     // Check if current grid matches the previous grid (stable state)
        //     if (
        //         gridsAreEqual(
        //             previewGrid,
        //             previewHistory[previewHistory.length - 1]
        //         )
        //     ) {
        //         setIsPreviewRunning(false);
        //         return; // Stop preview if stable
        //     }
        //     // Check if current grid matches the grid from 2 steps ago (oscillation)
        //     if (
        //         previewHistory.length >= 3 &&
        //         gridsAreEqual(
        //             previewGrid,
        //             previewHistory[previewHistory.length - 3]
        //         )
        //     ) {
        //         setIsPreviewRunning(false);
        //         return; // Stop preview if oscillating
        //     }
        // }
        // Check for winner
        // const winner = checkForWinner(previewGrid);
        // if (winner) {
        //     setIsPreviewRunning(false);
        //     return; // Stop preview if someone won
        // }

        const nextGrid = runGameOfLifeStep(previewGrid);

        // Update preview history - store all states for backward navigation
        setPreviewHistory((prev) => {
            const newHistory = [
                ...prev,
                JSON.parse(JSON.stringify(previewGrid)),
            ];
            // Keep a reasonable history size (last 200 states)
            return newHistory.slice(-200);
        });

        setPreviewGrid(nextGrid);
        setPreviewGeneration((prev) => prev + 1);
    };

    // Run preview steps automatically when running
    useEffect(() => {
        if (
            isPreviewMode &&
            previewGrid &&
            isPreviewRunning &&
            previewGeneration < 200
        ) {
            const timer = setTimeout(runPreviewStep, 150); // Slightly slower than main animation
            return () => clearTimeout(timer);
        }
    }, [isPreviewMode, previewGrid, isPreviewRunning, previewGeneration]);

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

        // If a shape is selected, place it
        if (selectedShape && onShapePlace) {
            onShapePlace(selectedShape, row, col);
        } else {
            // Regular cell click
            onCellClick(row, col);
        }
    };

    // Handle mouse move for ghost preview
    const handleMouseMove = (row: number, col: number) => {
        if (selectedShape && canEditGrid) {
            const canEdit =
                (playerNumber === 1 && row < PLAYER_EDITABLE_ROWS) ||
                (playerNumber === 2 && row >= gridSize - PLAYER_EDITABLE_ROWS);

            if (canEdit) {
                setGhostPosition({ row, col });
            } else {
                setGhostPosition(null);
            }
        } else {
            setGhostPosition(null);
        }
    };

    // Check if a cell should show ghost preview
    const isGhostCell = (row: number, col: number): boolean => {
        if (!selectedShape || !ghostPosition) return false;

        const relativeRow = row - ghostPosition.row;
        const relativeCol = col - ghostPosition.col;

        if (relativeRow < 0 || relativeRow >= selectedShape.pattern.length)
            return false;
        if (
            relativeCol < 0 ||
            relativeCol >= selectedShape.pattern[relativeRow].length
        )
            return false;

        // Only show ghost for cells that are in the pattern and in the player's editable area
        const isInPattern =
            selectedShape.pattern[relativeRow][relativeCol] === 1;
        if (!isInPattern) return false;

        // Check if this cell is in the player's editable area
        const canEditTarget =
            (playerNumber === 1 && row < PLAYER_EDITABLE_ROWS) ||
            (playerNumber === 2 && row >= gridSize - PLAYER_EDITABLE_ROWS);

        return canEditTarget;
    };

    // Handle shape drop
    const handleShapeDrop = (shape: any, dropRow: number, dropCol: number) => {
        if (playerNumber === 0) return; // Not a player in this game
        if (!canEditGrid) return; // Can't edit grid in current state

        // Check if the shape can be placed in the player's area
        const canPlaceShape = shape.pattern.every(
            (row: number[], rowIndex: number) => {
                return row.every((cell: number, colIndex: number) => {
                    if (cell === 0) return true; // Empty cells in pattern don't need validation

                    const targetRow = dropRow + rowIndex;
                    const targetCol = dropCol + colIndex;

                    // Check bounds
                    if (
                        targetRow < 0 ||
                        targetRow >= gridSize ||
                        targetCol < 0 ||
                        targetCol >= gridSize
                    ) {
                        return false;
                    }

                    // Check if target row is in player's editable area
                    const canEditTarget =
                        (playerNumber === 1 &&
                            targetRow < PLAYER_EDITABLE_ROWS) ||
                        (playerNumber === 2 &&
                            targetRow >= gridSize - PLAYER_EDITABLE_ROWS);

                    return canEditTarget;
                });
            }
        );

        if (!canPlaceShape) return; // Can't place shape in this location

        // Place the shape by calling onShapeDrop if provided
        // Only place cells that are within the player's editable area
        if (onShapeDrop) {
            // Create a filtered version of the shape that only includes valid cells
            const validShape = {
                ...shape,
                pattern: shape.pattern.map((row: number[], rowIndex: number) =>
                    row.map((cell: number) => {
                        if (cell === 0) return 0; // Keep empty cells

                        const targetRow = dropRow + rowIndex;

                        // Check if this cell is in the player's editable area
                        const canEditTarget =
                            (playerNumber === 1 &&
                                targetRow < PLAYER_EDITABLE_ROWS) ||
                            (playerNumber === 2 &&
                                targetRow >= gridSize - PLAYER_EDITABLE_ROWS);

                        return canEditTarget ? cell : 0; // Only place if in valid area
                    })
                ),
            };

            onShapeDrop(validShape, dropRow, dropCol);
        }
    };

    // Handle drag over
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
    };

    // Handle drop
    const handleDrop = (e: React.DragEvent, row: number, col: number) => {
        e.preventDefault();

        try {
            const shapeData = e.dataTransfer.getData("shape");
            if (shapeData) {
                const shape = JSON.parse(shapeData);
                handleShapeDrop(shape, row, col);
            }
        } catch (error) {
            console.error("Error handling shape drop:", error);
        }
    };

    // Get cell value from grid (use preview grid if in preview mode, animation grid if animating)
    const getCellValue = (row: number, col: number): number => {
        let currentGrid;
        if (isPreviewMode && previewGrid) {
            currentGrid = previewGrid;
        } else if (isAnimating && animationGrid) {
            currentGrid = animationGrid;
        } else {
            currentGrid = game.grid;
        }
        const rowData = currentGrid[`row${row}`];
        return rowData ? rowData[col] || 0 : 0;
    };

    // Disable cell editing during animation, preview, or when game is not in waiting/started state
    const canEditGrid =
        !isPreviewMode &&
        !isAnimating &&
        (game.state === "waiting" || game.state === "started");

    // Check if a player has no cells left
    const checkForWinner = (grid: {
        [key: string]: number[];
    }): string | null => {
        let player1Count = 0;
        let player2Count = 0;

        for (let row = 0; row < gridSize; row++) {
            const rowData = grid[`row${row}`] || [];
            for (let col = 0; col < gridSize; col++) {
                const cellValue = rowData[col] || 0;
                if (cellValue === 1) player1Count++;
                else if (cellValue === 2) player2Count++;
            }
        }

        if (player1Count === 0 && player2Count === 0) return "tie";
        if (player1Count === 0) return "player2";
        if (player2Count === 0) return "player1";
        return null;
    };

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
                // Determine background color classes
                let backgroundClasses = "";
                const isGhost = isGhostCell(row, col);
                if (cellValue === 1) {
                    backgroundClasses = "bg-blue-500";
                } else if (cellValue === 2) {
                    backgroundClasses = "bg-red-500";
                } else if (isGhost) {
                    // Ghost preview
                    backgroundClasses =
                        playerNumber === 1 ? "bg-blue-300" : "bg-red-300";
                } else if (canPlayerEdit) {
                    // Highlight editable area for current player
                    backgroundClasses = "bg-gray-300";
                } else {
                    // Neutral area or other player's area
                    backgroundClasses = "bg-gray-700";
                }

                cols.push(
                    <div
                        key={`${row}-${col}`}
                        className={`w-3 h-3 border border-gray-600 ${backgroundClasses} ${
                            canPlayerEdit || selectedShape
                                ? "cursor-pointer"
                                : "cursor-not-allowed"
                        }`}
                        onMouseEnter={() => {
                            if (mouseDownRef.current) {
                                handleCellClick(row, col);
                            }
                            handleMouseMove(row, col);
                        }}
                        onMouseMove={() => handleMouseMove(row, col)}
                        onClick={() => {
                            handleCellClick(row, col);
                        }}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, row, col)}
                    />
                );
            }
            rows.push(
                <div key={row} className="flex">
                    {cols}
                </div>
            );
        }
        return rows;
    };

    // Get player theme colors
    const getPlayerTheme = () => {
        if (playerNumber === 1) {
            return {
                bg: "bg-slate-900/95",
                border: "border-blue-500/30",
                text: "text-blue-300",
                textSecondary: "text-blue-400",
                button: "bg-blue-600 hover:bg-blue-700",
                accent: "bg-blue-500",
            };
        } else if (playerNumber === 2) {
            return {
                bg: "bg-slate-900/95",
                border: "border-red-500/30",
                text: "text-red-300",
                textSecondary: "text-red-400",
                button: "bg-red-600 hover:bg-red-700",
                accent: "bg-red-500",
            };
        }
        return {
            bg: "bg-slate-900/95",
            border: "border-gray-500/30",
            text: "text-gray-300",
            textSecondary: "text-gray-400",
            button: "bg-gray-600 hover:bg-gray-700",
            accent: "bg-gray-500",
        };
    };

    const theme = getPlayerTheme();

    return (
        <div
            className={`${theme.bg} ${theme.border} border rounded-lg p-4 h-screen flex flex-col`}
        >
            {/* Compact Header */}
            <div className="mb-4 flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                    <div
                        className={`${theme.button} text-white px-4 py-2 rounded font-medium`}
                    >
                        PLAYER {playerNumber}
                    </div>

                    {/* Preview Controls - Compact */}
                    {playerNumber > 0 && (
                        <div className="flex items-center gap-2">
                            {!isPreviewMode ? (
                                <button
                                    onClick={startPreview}
                                    className={`${theme.button} text-white px-4 py-2 rounded font-medium`}
                                >
                                    PREVIEW
                                </button>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={stopPreview}
                                        className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
                                    >
                                        EXIT
                                    </button>
                                    <button
                                        onClick={resetPreview}
                                        className={`${theme.button} text-white px-3 py-1 rounded text-sm`}
                                    >
                                        RESET
                                    </button>
                                    <div
                                        className={`${theme.text} px-3 py-1 bg-gray-800 rounded text-sm`}
                                    >
                                        {previewGeneration}/200
                                    </div>
                                    {!isPreviewRunning ? (
                                        <button
                                            onClick={resumePreview}
                                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                                        >
                                            PLAY
                                        </button>
                                    ) : (
                                        <button
                                            onClick={pausePreview}
                                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm"
                                        >
                                            PAUSE
                                        </button>
                                    )}
                                    <button
                                        onClick={stepForwardPreview}
                                        disabled={previewGeneration >= 200}
                                        className={`${theme.button} text-white px-3 py-1 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={stepBackwardPreview}
                                        disabled={previewGeneration <= 0}
                                        className={`${theme.button} text-white px-3 py-1 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        -
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Status Messages - Compact */}
                {canEditGrid && selectedShape && (
                    <div className="bg-gray-800 rounded p-2 mb-2">
                        <p className={`${theme.text} text-sm text-center`}>
                            SHAPE PLACEMENT MODE - Press ENTER to exit
                        </p>
                    </div>
                )}

                {canEditGrid && !selectedShape && (
                    <div className="bg-gray-800 rounded p-2 mb-2">
                        <p className={`${theme.text} text-sm text-center`}>
                            EDITABLE ROWS:{" "}
                            {playerNumber === 1
                                ? `0-${PLAYER_EDITABLE_ROWS - 1}`
                                : `${gridSize - PLAYER_EDITABLE_ROWS}-${
                                      gridSize - 1
                                  }`}
                        </p>
                    </div>
                )}

                {isAnimating && (
                    <div className="bg-gray-800 rounded p-2 mb-2">
                        <div className="flex items-center justify-between">
                            <p className={`${theme.text} text-sm font-medium`}>
                                SIMULATION: {animationGeneration} / 1000
                            </p>
                            <div className="w-32 h-2 bg-gray-700 rounded overflow-hidden">
                                <div
                                    className={`h-full ${theme.accent} transition-all duration-100`}
                                    style={{
                                        width: `${
                                            (animationGeneration / 1000) * 100
                                        }%`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {game.state === "fighting" && !isAnimating && game.winner && (
                    <div className="bg-green-800 rounded p-3 mb-2">
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-green-300 mb-1">
                                BATTLE COMPLETE
                            </h3>
                            {game.winner === "tie" ? (
                                <p className="text-green-400">DRAW</p>
                            ) : (
                                <p className="text-green-400">
                                    PLAYER{" "}
                                    {game.winner === "player1" ? "1" : "2"} WINS
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {game.state === "fighting" && !isAnimating && !game.winner && (
                    <div className="bg-gray-800 rounded p-2 mb-2">
                        <p className={`${theme.text} text-sm text-center`}>
                            PROCESSING BATTLE...
                        </p>
                    </div>
                )}

                {isPreviewMode && (
                    <div className="bg-gray-800 rounded p-2 mb-2">
                        <div className="flex items-center justify-between">
                            <p className={`${theme.text} text-sm`}>
                                PREVIEW MODE
                            </p>
                            <div className="w-32 h-2 bg-gray-700 rounded overflow-hidden">
                                <div
                                    className={`h-full ${theme.accent} transition-all duration-100`}
                                    style={{
                                        width: `${
                                            (previewGeneration / 200) * 100
                                        }%`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Game Grid - Main Focus */}
            <div className="flex-1 flex items-center justify-center">
                <div className="bg-gray-900 rounded border border-gray-700 p-2">
                    {renderGrid()}
                </div>
            </div>
        </div>
    );
};

export default GameCanvas;
