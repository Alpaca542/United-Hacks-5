import React, {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
} from "react";
import FightingBar from "./FightingBar";
/* eslint-disable */
// Constant for player editable rows (increased proportionally for 60x60 board)
const PLAYER_EDITABLE_ROWS = 18;

interface GameCanvasProps {
    game: {
        id: string;
        state: string;
        user1: {
            uid: string;
            username: string;
            ready: boolean;
            readyForFight?: boolean;
        } | null;
        user2: {
            uid: string;
            username: string;
            ready: boolean;
            readyForFight?: boolean;
        } | null;
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
    onClearSelectedShape?: () => void;
    onClearPlayerCells?: () => void;
    onToggleReadyForFight?: () => void;
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
    onClearSelectedShape,
    onClearPlayerCells,
    onToggleReadyForFight,
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

    // Performance optimizations and memoized calculations

    // Memoize player number calculation
    const playerNumber = useMemo(() => {
        if (!currentUser) return 0;
        if (game.user1?.uid === currentUser.uid) return 1;
        if (game.user2?.uid === currentUser.uid) return 2;
        return 0;
    }, [currentUser, game.user1?.uid, game.user2?.uid]);

    // Memoize grid editing state
    const canEditGrid = useMemo(() => {
        return (
            !isPreviewMode &&
            !isAnimating &&
            (game.state === "waiting" || game.state === "started")
        );
    }, [isPreviewMode, isAnimating, game.state]);

    // Memoize ghost cell checker
    const isGhostCell = useCallback(
        (row: number, col: number): boolean => {
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
        },
        [selectedShape, ghostPosition, playerNumber, gridSize]
    );

    // Set up mouse and keyboard event listeners
    useEffect(() => {
        const handleMouseDown = () => {
            mouseDownRef.current = true;
        };

        const handleMouseUp = () => {
            mouseDownRef.current = false;
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            // Press Escape to exit shape placement mode
            if (e.key === "Escape" && selectedShape) {
                e.preventDefault();
                // Clear ghost position when exiting shape mode
                setGhostPosition(null);
                // Call parent callback to clear the selected shape
                if (onClearSelectedShape) {
                    onClearSelectedShape();
                }
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
    }, [selectedShape, onClearSelectedShape]);

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
    // Memoize win screen condition to prevent lag
    // Memoize cell value getter for performance
    const getCellValue = useCallback(
        (row: number, col: number): number => {
            let currentGrid;
            if (isPreviewMode && previewGrid) {
                currentGrid = previewGrid;
            } else if (
                (isAnimating && animationGrid) ||
                ((game.state === "fighting" || game.state === "finished") &&
                    !isAnimating &&
                    game.winner &&
                    animationGrid)
            ) {
                currentGrid = animationGrid;
            } else {
                currentGrid = game.grid;
            }
            const rowData = currentGrid[`row${row}`];
            return rowData ? rowData[col] || 0 : 0;
        },
        [
            isPreviewMode,
            previewGrid,
            isAnimating,
            animationGrid,
            game.grid,
            game.state,
            game.winner,
        ]
    );

    const shouldShowWinScreen = useMemo(() => {
        return (
            (game.state === "fighting" || game.state === "finished") &&
            !isAnimating &&
            game.winner
        );
    }, [game.state, game.winner, isAnimating]);
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
            animationGeneration < 10 &&
            !shouldShowWinScreen
        ) {
            setIsAnimating(true);
            setAnimationGrid(JSON.parse(JSON.stringify(game.grid))); // Deep copy
            setAnimationGeneration(0);
            setGridHistory([]); // Reset grid history for new animation
        }
    }, [game.state, isAnimating, game.grid]);

    // Run animation steps
    useEffect(() => {
        if (isAnimating && animationGrid && animationGeneration < 500) {
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
        } else if (isAnimating && animationGeneration >= 500) {
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

    // Player number is now memoized above

    // Get current player's ready for fight status
    const getCurrentPlayerReadyForFight = (): boolean => {
        if (playerNumber === 1) return game.user1?.readyForFight || false;
        if (playerNumber === 2) return game.user2?.readyForFight || false;
        return false;
    };

    // Check if both players are ready for fight
    const areBothPlayersReadyForFight = (): boolean => {
        return (
            (game.user1?.readyForFight || false) &&
            (game.user2?.readyForFight || false)
        );
    };

    // Handle ready for fight toggle
    const handleToggleReadyForFight = () => {
        if (game.state !== "started" || !onToggleReadyForFight) return;
        onToggleReadyForFight();
    };
    const handleClearPlayerCells = () => {
        if (!canEditGrid || !onClearPlayerCells) return;

        // Clear ghost position if shape is selected
        if (selectedShape) {
            setGhostPosition(null);
        }

        // Call the parent callback to clear cells
        onClearPlayerCells();
    };

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

    // Check if a cell should show ghost preview - now memoized above

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

    // Get cell value from grid - now memoized above

    // Disable cell editing - now memoized above

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

    // Optimized grid rendering with virtualization for better performance
    const renderGrid = useMemo(() => {
        const cells = [];
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const cellValue = getCellValue(row, col);

                // Check if current player can edit this row
                const canPlayerEdit =
                    canEditGrid &&
                    ((playerNumber === 1 && row < PLAYER_EDITABLE_ROWS) ||
                        (playerNumber === 2 &&
                            row >= gridSize - PLAYER_EDITABLE_ROWS));

                // Determine background color classes with better visual hierarchy
                let backgroundClasses = "";
                let borderClasses = "border-slate-600/50";
                let shadowClasses = "";

                const isGhost = isGhostCell(row, col);

                if (cellValue === 1) {
                    backgroundClasses =
                        "bg-gradient-to-br from-blue-500 to-blue-600";
                    borderClasses = "border-blue-400/70";
                    shadowClasses = "shadow-sm shadow-blue-500/40";
                } else if (cellValue === 2) {
                    backgroundClasses =
                        "bg-gradient-to-br from-red-500 to-red-600";
                    borderClasses = "border-red-400/70";
                    shadowClasses = "shadow-sm shadow-red-500/40";
                } else if (isGhost) {
                    // Ghost preview with subtle animation
                    backgroundClasses =
                        playerNumber === 1
                            ? "bg-gradient-to-br from-blue-400/50 to-blue-500/50 animate-pulse"
                            : "bg-gradient-to-br from-red-400/50 to-red-500/50 animate-pulse";
                    borderClasses =
                        playerNumber === 1
                            ? "border-blue-400/70"
                            : "border-red-400/70";
                    shadowClasses = "shadow-sm shadow-blue-400/30";
                } else if (canPlayerEdit) {
                    // Highlight editable area for current player with subtle glow
                    backgroundClasses =
                        playerNumber === 1
                            ? "bg-slate-700/80 hover:bg-slate-600/90"
                            : "bg-slate-700/80 hover:bg-slate-600/90";
                    borderClasses =
                        playerNumber === 1
                            ? "border-blue-500/30 hover:border-blue-400/50"
                            : "border-red-500/30 hover:border-red-400/50";
                } else {
                    // Neutral area or other player's area
                    backgroundClasses = "bg-slate-800/60";
                    borderClasses = "border-slate-600/30";
                }

                // Add player zone indicators
                let zoneClasses = "";
                if (playerNumber === 1 && row < PLAYER_EDITABLE_ROWS) {
                    zoneClasses = "ring-1 ring-blue-500/20";
                } else if (
                    playerNumber === 2 &&
                    row >= gridSize - PLAYER_EDITABLE_ROWS
                ) {
                    zoneClasses = "ring-1 ring-red-500/20";
                }

                cells.push(
                    <div
                        key={`${row}-${col}`}
                        className={`aspect-square border ${borderClasses} ${backgroundClasses} ${shadowClasses} ${zoneClasses}
                            transition-all duration-75 ease-in-out
                            ${
                                canPlayerEdit || selectedShape
                                    ? "cursor-pointer hover:scale-105 active:scale-95 hover:z-10"
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
        }
        return cells;
    }, [
        gridSize,
        getCellValue,
        canEditGrid,
        playerNumber,
        isGhostCell,
        selectedShape,
        handleCellClick,
        handleMouseMove,
        handleDragOver,
        handleDrop,
    ]);

    // Get player theme colors with memoization
    const theme = useMemo(() => {
        if (playerNumber === 1) {
            return {
                bg: "bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20",
                border: "border-blue-500/40",
                text: "text-blue-200",
                textSecondary: "text-blue-300",
                button: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-500/25",
                accent: "bg-gradient-to-r from-blue-500 to-blue-600",
                glow: "shadow-lg shadow-blue-500/20",
            };
        } else if (playerNumber === 2) {
            return {
                bg: "bg-gradient-to-br from-slate-900 via-slate-800 to-red-900/20",
                border: "border-red-500/40",
                text: "text-red-200",
                textSecondary: "text-red-300",
                button: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-500/25",
                accent: "bg-gradient-to-r from-red-500 to-red-600",
                glow: "shadow-lg shadow-red-500/20",
            };
        }
        return {
            bg: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
            border: "border-slate-500/40",
            text: "text-slate-200",
            textSecondary: "text-slate-300",
            button: "bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 shadow-lg shadow-slate-500/25",
            accent: "bg-gradient-to-r from-slate-500 to-slate-600",
            glow: "shadow-lg shadow-slate-500/20",
        };
    }, [playerNumber]);

    // Icon components for better performance and consistency
    const ClearIcon = ({ className = "w-4 h-4" }) => (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M3 6h18l-2 13H5L3 6zM8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M10 11v6M14 11v6" />
        </svg>
    );

    const EyeIcon = ({ className = "w-4 h-4" }) => (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );

    const PlayIcon = ({ className = "w-4 h-4" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
        </svg>
    );

    const PauseIcon = ({ className = "w-4 h-4" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zM14 4h4v16h-4V4z" />
        </svg>
    );

    const SkipBackIcon = ({ className = "w-4 h-4" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 20L9 12l10-8v16zM5 4v16h2V4H5z" />
        </svg>
    );

    const SkipForwardIcon = ({ className = "w-4 h-4" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 4l10 8-10 8V4zM17 4v16h2V4h-2z" />
        </svg>
    );

    const RefreshIcon = ({ className = "w-4 h-4" }) => (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M23 4v6h-6M1 20v-6h6" />
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
        </svg>
    );

    const XIcon = ({ className = "w-4 h-4" }) => (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    );

    const CheckIcon = ({ className = "w-4 h-4" }) => (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M20 6L9 17l-5-5" />
        </svg>
    );

    const CircleIcon = ({ className = "w-4 h-4" }) => (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="12" cy="12" r="10" />
        </svg>
    );

    return (
        <div className="w-full h-full flex flex-col bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
            {/* Clean Header Bar */}
            <header
                className={`${theme.bg} ${theme.border} border-b px-4 py-2 flex-shrink-0 backdrop-blur-sm`}
            >
                <div className="flex items-center justify-between gap-4">
                    {/* Player Badge */}
                    <div
                        className={`${theme.button} text-white px-3 py-1.5 rounded-lg font-bold text-sm flex-shrink-0 shadow-md`}
                    >
                        Player {playerNumber}
                    </div>

                    {/* Fighting Bar - Center */}
                    <div className="flex-1 max-w-md mx-4">
                        <FightingBar
                            grid={
                                (isPreviewMode && previewGrid) ||
                                (isAnimating && animationGrid) ||
                                game.grid ||
                                {}
                            }
                            gridSize={gridSize}
                            showAnimatedNumbers={isAnimating}
                        />
                    </div>

                    {/* Action Buttons - Right */}
                    {playerNumber > 0 && (
                        <div className="flex items-center gap-2 flex-shrink-0">
                            {/* Clear button */}
                            <button
                                onClick={handleClearPlayerCells}
                                disabled={!canEditGrid}
                                className={`${theme.button} text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2`}
                                title="Clear board"
                            >
                                <ClearIcon />
                                <span className="hidden sm:inline">Clear</span>
                            </button>

                            {/* Ready for fight button */}
                            {game.state === "started" && (
                                <button
                                    onClick={handleToggleReadyForFight}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 hover:opacity-90 flex items-center gap-2 ${
                                        getCurrentPlayerReadyForFight()
                                            ? "bg-green-600 hover:bg-green-500 text-white shadow-md"
                                            : `${theme.button} text-white`
                                    }`}
                                    title={
                                        getCurrentPlayerReadyForFight()
                                            ? "Ready for battle"
                                            : "Mark as ready"
                                    }
                                >
                                    {getCurrentPlayerReadyForFight() ? (
                                        <CheckIcon />
                                    ) : (
                                        <CircleIcon />
                                    )}
                                    <span className="hidden sm:inline">
                                        {getCurrentPlayerReadyForFight()
                                            ? "Ready!"
                                            : "Ready"}
                                    </span>
                                </button>
                            )}

                            {/* Preview controls */}
                            <div className="flex items-center gap-1 bg-slate-800/50 rounded-lg p-1 border border-slate-600/30">
                                {!isPreviewMode ? (
                                    <button
                                        onClick={startPreview}
                                        disabled={!canEditGrid}
                                        className={`${theme.button} text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2`}
                                        title="Start preview"
                                    >
                                        <EyeIcon />
                                        <span className="hidden sm:inline">
                                            Preview
                                        </span>
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            onClick={
                                                isPreviewRunning
                                                    ? pausePreview
                                                    : resumePreview
                                            }
                                            className={`${theme.button} text-white p-1.5 rounded-md transition-colors duration-200 hover:opacity-90`}
                                            title={
                                                isPreviewRunning
                                                    ? "Pause preview"
                                                    : "Resume preview"
                                            }
                                        >
                                            {isPreviewRunning ? (
                                                <PauseIcon />
                                            ) : (
                                                <PlayIcon />
                                            )}
                                        </button>
                                        <button
                                            onClick={stepBackwardPreview}
                                            disabled={
                                                previewHistory.length <= 1
                                            }
                                            className={`${theme.button} text-white p-1.5 rounded-md transition-colors duration-200 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed`}
                                            title="Step backward"
                                        >
                                            <SkipBackIcon />
                                        </button>
                                        <button
                                            onClick={stepForwardPreview}
                                            disabled={previewGeneration >= 200}
                                            className={`${theme.button} text-white p-1.5 rounded-md transition-colors duration-200 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed`}
                                            title="Step forward"
                                        >
                                            <SkipForwardIcon />
                                        </button>
                                        <button
                                            onClick={resetPreview}
                                            className={`${theme.button} text-white p-1.5 rounded-md transition-colors duration-200 hover:opacity-90`}
                                            title="Reset preview"
                                        >
                                            <RefreshIcon />
                                        </button>
                                        <button
                                            onClick={stopPreview}
                                            className={`bg-red-600 hover:bg-red-500 text-white p-1.5 rounded-md transition-colors duration-200`}
                                            title="Stop preview"
                                        >
                                            <XIcon />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Status Messages Bar - Compact */}
            <div className="flex-shrink-0 px-2 sm:px-4 py-1">
                {/* Battle starting message */}
                {game.state === "started" && areBothPlayersReadyForFight() && (
                    <div className="bg-gradient-to-r from-amber-800/80 to-amber-900/80 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-amber-500/40">
                        <div className="flex items-center justify-center gap-1 sm:gap-2">
                            <div className="animate-spin rounded-full h-2 w-2 sm:h-3 sm:w-3 border-2 border-amber-300 border-t-transparent"></div>
                            <p className="text-amber-200 text-xs font-semibold">
                                BATTLE STARTING...
                            </p>
                        </div>
                    </div>
                )}

                {/* Waiting for players message */}
                {game.state === "started" && !areBothPlayersReadyForFight() && (
                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-slate-600/40">
                        <div className="flex items-center justify-center gap-2 sm:gap-4">
                            <p className="text-slate-300 text-xs font-medium">
                                WAITING FOR PLAYERS
                            </p>
                            <div className="flex gap-2 sm:gap-3">
                                <div className="flex items-center gap-1">
                                    <div
                                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                                            game.user1?.readyForFight
                                                ? "bg-green-500 animate-pulse"
                                                : "bg-slate-600"
                                        }`}
                                    ></div>
                                    <span className="text-xs text-slate-400">
                                        {game.user1?.username || "P1"}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div
                                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                                            game.user2?.readyForFight
                                                ? "bg-green-500 animate-pulse"
                                                : "bg-slate-600"
                                        }`}
                                    ></div>
                                    <span className="text-xs text-slate-400">
                                        {game.user2?.username || "P2"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Shape placement mode */}
                {canEditGrid && selectedShape && (
                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-slate-600/40">
                        <div className="flex items-center justify-center gap-1 sm:gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <p className="text-slate-300 text-xs font-medium">
                                SHAPE MODE - ESC to exit
                            </p>
                        </div>
                    </div>
                )}

                {/* Editable rows info */}
                {canEditGrid && !selectedShape && (
                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-slate-600/40">
                        <p className="text-slate-300 text-xs text-center font-medium">
                            EDITABLE ROWS:{" "}
                            <span className="font-mono text-slate-300">
                                {playerNumber === 1
                                    ? `0-${PLAYER_EDITABLE_ROWS - 1}`
                                    : `${gridSize - PLAYER_EDITABLE_ROWS}-${
                                          gridSize - 1
                                      }`}
                            </span>
                        </p>
                    </div>
                )}

                {/* Win screen */}
                {shouldShowWinScreen && (
                    <div
                        className={`bg-gradient-to-r backdrop-blur-sm rounded-lg p-2 sm:p-3 border ${
                            game.winner === "tie"
                                ? "from-yellow-800/80 to-yellow-900/80 border-yellow-500/40"
                                : game.winner === `player${playerNumber}`
                                ? "from-green-800/80 to-green-900/80 border-green-500/40"
                                : "from-red-800/80 to-red-900/80 border-red-500/40"
                        }`}
                    >
                        <div className="text-center">
                            <h3
                                className={`text-sm sm:text-base font-bold mb-1 ${
                                    game.winner === "tie"
                                        ? "text-yellow-300"
                                        : game.winner ===
                                          `player${playerNumber}`
                                        ? "text-green-300"
                                        : "text-red-300"
                                }`}
                            >
                                🏆 BATTLE COMPLETE 🏆
                            </h3>
                            {game.winner === "tie" ? (
                                <p className="text-yellow-200 text-xs sm:text-sm font-semibold">
                                    DRAW
                                </p>
                            ) : game.winner === `player${playerNumber}` ? (
                                <p className="text-green-200 text-xs sm:text-sm font-semibold">
                                    YOU WON
                                </p>
                            ) : (
                                <p className="text-red-200 text-xs sm:text-sm font-semibold">
                                    YOU LOSE
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {/* Processing battle */}
                {game.state === "fighting" && !isAnimating && !game.winner && (
                    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-slate-600/40">
                        <div className="flex items-center justify-center gap-1 sm:gap-2">
                            <div className="animate-spin rounded-full h-2 w-2 sm:h-3 sm:w-3 border-2 border-slate-300 border-t-transparent"></div>
                            <p className="text-slate-300 text-xs font-medium">
                                PROCESSING BATTLE...
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Main Game Area - Grid First */}
            <div className="flex-1 flex items-center justify-center p-2 sm:p-4 min-h-0">
                <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 h-full w-full">
                    {/* Grid Container - Maximum space */}
                    <div className="flex-1 flex items-center justify-center w-full min-h-0">
                        <div
                            className="bg-slate-900/90 backdrop-blur-sm rounded-lg sm:rounded-xl border-2 border-slate-700/50 p-1 sm:p-2 shadow-2xl shadow-slate-900/50 transition-all duration-300"
                            style={{
                                height: "fit-content",
                                maxHeight: "100%",
                                width: "fit-content",
                                maxWidth: "100%",
                            }}
                        >
                            <div
                                className="bg-slate-800/70 rounded-md sm:rounded-lg p-1 border border-slate-600/40 overflow-hidden"
                                style={{
                                    width: "fit-content",
                                    height: "fit-content",
                                    boxShadow:
                                        "inset 0 0 20px rgba(0, 0, 0, 0.6)",
                                }}
                            >
                                <div
                                    className="grid bg-slate-900/60 rounded-sm sm:rounded-md overflow-hidden"
                                    style={{
                                        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                                        width: "min(80vw, 60vh, 500px)",
                                        height: "min(80vw, 60vh, 500px)",
                                        gap: "0.5px",
                                        padding: "1px",
                                    }}
                                >
                                    {renderGrid}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress/Status Bar - Below Grid */}
                    <div className="flex-shrink-0 w-full max-w-sm sm:max-w-md">
                        {(isAnimating || isPreviewMode) && (
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-600/40">
                                <div className="flex items-center justify-between mb-1 sm:mb-2">
                                    <p className="text-slate-300 text-xs sm:text-sm font-semibold">
                                        {isAnimating ? "SIMULATION" : "PREVIEW"}
                                    </p>
                                    <p className="text-slate-300 text-xs sm:text-sm font-mono">
                                        {isAnimating
                                            ? `${animationGeneration}/500`
                                            : `${previewGeneration}/200`}
                                    </p>
                                </div>
                                <div className="w-full h-1.5 sm:h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${theme.accent} transition-all duration-300 ease-out`}
                                        style={{
                                            width: `${
                                                isAnimating
                                                    ? (animationGeneration /
                                                          500) *
                                                      100
                                                    : (previewGeneration /
                                                          200) *
                                                      100
                                            }%`,
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCanvas;
