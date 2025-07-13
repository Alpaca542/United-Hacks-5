import React, { useState } from "react";

interface Shape {
    id: string;
    name: string;
    pattern: number[][];
    color: string;
    description: string;
    category: string;
}

interface ShapeStorageProps {
    playerNumber: number;
    onShapeSelect: (shape: Shape) => void;
    selectedShape: Shape | null;
}

const ShapeStorage: React.FC<ShapeStorageProps> = ({
    playerNumber,
    onShapeSelect,
    selectedShape,
}) => {
    const [rotation, setRotation] = useState(0);

    // Advanced Conway's Game of Life patterns
    const shapes: Shape[] = [
        // Basic Patterns
        {
            id: "block",
            name: "Block",
            pattern: [
                [1, 1],
                [1, 1],
            ],
            color: "#1e40af",
            description: "Still life - never changes",
            category: "Still Life",
        },
        {
            id: "blinker",
            name: "Blinker",
            pattern: [[1, 1, 1]],
            color: "#1e40af",
            description: "Oscillates between horizontal and vertical",
            category: "Oscillator",
        },
        {
            id: "glider",
            name: "Glider",
            pattern: [
                [0, 1, 0],
                [0, 0, 1],
                [1, 1, 1],
            ],
            color: "#1e40af",
            description: "Moves diagonally across the board",
            category: "Spaceship",
        },

        // Advanced Spaceships
        {
            id: "lwss",
            name: "Lightweight Spaceship",
            pattern: [
                [0, 1, 1, 1, 1],
                [1, 0, 0, 0, 1],
                [0, 0, 0, 0, 1],
                [1, 0, 0, 1, 0],
            ],
            color: "#1e40af",
            description: "Fast horizontal spaceship",
            category: "Spaceship",
        },
        {
            id: "mwss",
            name: "Middleweight Spaceship",
            pattern: [
                [0, 0, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0],
                [0, 0, 1, 1, 0, 0, 0],
            ],
            color: "#1e40af",
            description: "Medium-sized spaceship",
            category: "Spaceship",
        },

        // Complex Oscillators
        {
            id: "pulsar",
            name: "Pulsar",
            pattern: [
                [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
            ],
            color: "#1e40af",
            description: "Large period-3 oscillator",
            category: "Oscillator",
        },

        // Gosper Glider Gun
        {
            id: "gosper_gun",
            name: "Gosper Glider Gun",
            pattern: [
                [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
                    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                ],
                [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
                    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                ],
                [
                    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
                    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0,
                    0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
                    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
            ],
            color: "#1e40af",
            description: "Infinite glider generator",
            category: "Gun",
        },

        // Explosions and Methuselahs
        {
            id: "r_pentomino",
            name: "R-Pentomino",
            pattern: [
                [0, 1, 1],
                [1, 1, 0],
                [0, 1, 0],
            ],
            color: "#1e40af",
            description:
                "Chaotic pattern that stabilizes after 1103 generations",
            category: "Methuselah",
        },
        {
            id: "acorn",
            name: "Acorn",
            pattern: [
                [0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [1, 1, 0, 0, 1, 1, 1],
            ],
            color: "#1e40af",
            description: "Long-lived pattern that creates many gliders",
            category: "Methuselah",
        },
        {
            id: "diehard",
            name: "Diehard",
            pattern: [
                [0, 0, 0, 0, 0, 0, 1, 0],
                [1, 1, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 1, 1, 1],
            ],
            color: "#1e40af",
            description: "Dies after exactly 130 generations",
            category: "Methuselah",
        },

        // Advanced Spaceships
        {
            id: "copperhead",
            name: "Copperhead",
            pattern: [
                [0, 1, 1, 0, 0, 1, 1, 0],
                [1, 0, 0, 1, 1, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 1, 0],
                [0, 0, 1, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 0, 1, 0],
                [1, 0, 0, 1, 1, 0, 0, 1],
                [0, 1, 1, 0, 0, 1, 1, 0],
            ],
            color: "#1e40af",
            description: "Period-12 spaceship",
            category: "Spaceship",
        },
    ];

    // Rotate pattern using rotation matrix
    const rotatePattern = (
        pattern: number[][],
        rotations: number
    ): number[][] => {
        let result = pattern;
        for (let i = 0; i < rotations; i++) {
            result = rotatePatternOnce(result);
        }
        return result;
    };

    const rotatePatternOnce = (pattern: number[][]): number[][] => {
        const rows = pattern.length;
        const cols = pattern[0].length;
        const rotated: number[][] = [];

        for (let i = 0; i < cols; i++) {
            rotated[i] = [];
            for (let j = 0; j < rows; j++) {
                rotated[i][j] = pattern[rows - 1 - j][i];
            }
        }

        return rotated;
    };

    const handleShapeSelect = (shape: Shape) => {
        const rotatedShape = {
            ...shape,
            pattern: rotatePattern(shape.pattern, rotation),
        };
        onShapeSelect(rotatedShape);
    };

    const rotateClockwise = () => {
        setRotation((prev) => (prev + 1) % 4);
    };

    const rotateCounterclockwise = () => {
        setRotation((prev) => (prev - 1 + 4) % 4);
    };

    const renderShape = (shape: Shape) => {
        const displayPattern = rotatePattern(shape.pattern, rotation);
        const rows = [];

        for (let row = 0; row < displayPattern.length; row++) {
            const cols = [];
            for (let col = 0; col < displayPattern[row].length; col++) {
                const cellValue = displayPattern[row][col];
                cols.push(
                    <div
                        key={`${row}-${col}`}
                        className={`w-2.5 h-2.5 border-[0.5px] inline-block rounded-sm transition-all duration-300 ${
                            cellValue === 1
                                ? playerNumber === 1
                                    ? "bg-gradient-to-br from-blue-400 to-blue-600 border-blue-300/80 shadow-sm shadow-blue-400/50 animate-pulse"
                                    : "bg-gradient-to-br from-red-400 to-red-600 border-red-300/80 shadow-sm shadow-red-400/50 animate-pulse"
                                : "bg-slate-700/80 border-slate-600/60 hover:bg-slate-600/80"
                        }`}
                    />
                );
            }
            rows.push(
                <div key={row} className="flex gap-[1px]">
                    {cols}
                </div>
            );
        }
        return <div className="flex flex-col gap-[1px] p-1">{rows}</div>;
    };

    const categories = [...new Set(shapes.map((shape) => shape.category))];

    // Get player theme colors
    const getPlayerTheme = () => {
        if (playerNumber === 1) {
            return {
                bg: "bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-blue-900/30",
                border: "border-blue-500/50",
                text: "text-blue-100",
                textSecondary: "text-blue-200/80",
                accent: "text-blue-400",
                button: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
                cardBg: "bg-slate-800/80",
                cardBorder: "border-slate-600/50",
                cardHover:
                    "hover:border-blue-500/60 hover:bg-slate-700/90 hover:shadow-lg hover:shadow-blue-500/20",
                selectedBg: "bg-blue-900/40",
                selectedBorder: "border-blue-400/90",
                selectedShadow: "shadow-xl shadow-blue-500/30",
            };
        } else if (playerNumber === 2) {
            return {
                bg: "bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-red-900/30",
                border: "border-red-500/50",
                text: "text-red-100",
                textSecondary: "text-red-200/80",
                accent: "text-red-400",
                button: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600",
                cardBg: "bg-slate-800/80",
                cardBorder: "border-slate-600/50",
                cardHover:
                    "hover:border-red-500/60 hover:bg-slate-700/90 hover:shadow-lg hover:shadow-red-500/20",
                selectedBg: "bg-red-900/40",
                selectedBorder: "border-red-400/90",
                selectedShadow: "shadow-xl shadow-red-500/30",
            };
        }
        return {
            bg: "bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95",
            border: "border-slate-500/50",
            text: "text-slate-100",
            textSecondary: "text-slate-200/80",
            accent: "text-slate-400",
            button: "bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600",
            cardBg: "bg-slate-800/80",
            cardBorder: "border-slate-600/50",
            cardHover:
                "hover:border-slate-500/60 hover:bg-slate-700/90 hover:shadow-lg hover:shadow-slate-500/20",
            selectedBg: "bg-slate-900/40",
            selectedBorder: "border-slate-400/90",
            selectedShadow: "shadow-xl shadow-slate-500/30",
        };
    };

    const theme = getPlayerTheme();

    return (
        <div
            className={`${theme.bg} ${theme.border} border-2 p-6 rounded-2xl min-w-80 max-w-96 shadow-2xl backdrop-blur-sm`}
        >
            {/* Header with improved styling */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div
                        className={`w-10 h-10 ${theme.button} rounded-lg flex items-center justify-center shadow-lg`}
                    >
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                        </svg>
                    </div>
                    <h3
                        className={`text-xl font-bold ${theme.text} tracking-wide`}
                    >
                        Pattern Library
                    </h3>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={rotateCounterclockwise}
                        className={`p-2.5 ${theme.button} text-white rounded-xl transition-all duration-300 shadow-lg transform hover:scale-110 active:scale-95 hover:shadow-xl`}
                        title="Rotate Counterclockwise"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={rotateClockwise}
                        className={`p-2.5 ${theme.button} text-white rounded-xl transition-all duration-300 shadow-lg transform hover:scale-110 active:scale-95 hover:shadow-xl`}
                        title="Rotate Clockwise"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Rotation indicator */}
            <div
                className={`text-xs ${theme.textSecondary} mb-4 p-3 ${theme.cardBg} rounded-xl border ${theme.cardBorder} flex items-center justify-between`}
            >
                <span>Select a pattern to place on the board</span>
                <div className="flex items-center gap-2">
                    <span className="text-xs opacity-70">Rotation:</span>
                    <span className={`${theme.accent} font-mono font-bold`}>
                        {rotation * 90}°
                    </span>
                </div>
            </div>

            {/* Enhanced scrollable patterns area */}
            <div className="space-y-6 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-slate-800/50 scrollbar-thumb-slate-600/50 scrollbar-thumb-rounded-full hover:scrollbar-thumb-slate-500/70">
                {categories.map((category) => (
                    <div key={category} className="animate-fade-in">
                        <div className={`flex items-center gap-3 mb-4 px-2`}>
                            <div
                                className={`w-8 h-8 ${theme.button} rounded-lg flex items-center justify-center shadow-md`}
                            >
                                <span className="text-white text-xs font-bold">
                                    {category.charAt(0)}
                                </span>
                            </div>
                            <h4
                                className={`text-sm font-bold ${theme.accent} tracking-wider uppercase`}
                            >
                                {category}
                            </h4>
                            <div
                                className={`flex-1 h-px ${theme.button} opacity-30`}
                            ></div>
                        </div>
                        <div className="space-y-3">
                            {shapes
                                .filter((shape) => shape.category === category)
                                .map((shape) => (
                                    <div
                                        key={shape.id}
                                        className={`${
                                            theme.cardBg
                                        } p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                                            selectedShape?.id === shape.id
                                                ? `${theme.selectedBorder} ${theme.selectedBg} ${theme.selectedShadow} scale-[1.02]`
                                                : `${theme.cardBorder} ${theme.cardHover} hover:scale-[1.01]`
                                        } transform active:scale-[0.98] backdrop-blur-sm`}
                                        onClick={() => handleShapeSelect(shape)}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="relative">
                                                <div className="flex flex-col items-center p-3 bg-slate-900/60 rounded-xl border border-slate-600/40 shadow-inner">
                                                    <div className="mb-2">
                                                        {renderShape(shape)}
                                                    </div>
                                                    <div
                                                        className={`text-xs ${theme.textSecondary} opacity-60`}
                                                    >
                                                        {
                                                            rotatePattern(
                                                                shape.pattern,
                                                                rotation
                                                            ).length
                                                        }
                                                        ×
                                                        {rotatePattern(
                                                            shape.pattern,
                                                            rotation
                                                        )[0]?.length || 0}
                                                    </div>
                                                </div>
                                                {selectedShape?.id ===
                                                    shape.id && (
                                                    <div
                                                        className={`absolute -top-2 -right-2 w-6 h-6 ${theme.button} rounded-full flex items-center justify-center shadow-lg`}
                                                    >
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={3}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div
                                                    className={`text-sm font-bold ${theme.text} mb-2 flex items-center gap-2`}
                                                >
                                                    {shape.name}
                                                    <span
                                                        className={`text-xs px-2 py-1 ${theme.button} text-white rounded-full opacity-80`}
                                                    >
                                                        {shape.category}
                                                    </span>
                                                </div>
                                                <div
                                                    className={`text-xs ${theme.textSecondary} leading-relaxed mb-3`}
                                                >
                                                    {shape.description}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className={`w-2 h-2 rounded-full ${
                                                            playerNumber === 1
                                                                ? "bg-blue-400"
                                                                : "bg-red-400"
                                                        }`}
                                                    ></div>
                                                    <span
                                                        className={`text-xs ${theme.textSecondary} opacity-60`}
                                                    >
                                                        Player {playerNumber}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Enhanced controls section */}
            <div
                className={`mt-6 p-4 ${theme.cardBg} rounded-xl border ${theme.cardBorder} backdrop-blur-sm`}
            >
                <div
                    className={`font-bold mb-3 ${theme.text} flex items-center gap-2`}
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    Controls
                </div>
                <div className={`text-xs ${theme.textSecondary} space-y-2`}>
                    <div className="flex items-center gap-2">
                        <div
                            className={`w-2 h-2 rounded-full ${theme.button}`}
                        ></div>
                        <span>Select a pattern to activate placement mode</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div
                            className={`w-2 h-2 rounded-full ${theme.button}`}
                        ></div>
                        <span>Use rotation buttons to orient patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div
                            className={`w-2 h-2 rounded-full ${theme.button}`}
                        ></div>
                        <span>
                            Click on the board to place selected pattern
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div
                            className={`w-2 h-2 rounded-full ${theme.button}`}
                        ></div>
                        <span>
                            Press{" "}
                            <kbd
                                className={`px-1 py-0.5 ${theme.cardBg} border rounded text-xs`}
                            >
                                ESC
                            </kbd>{" "}
                            to cancel placement
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShapeStorage;
