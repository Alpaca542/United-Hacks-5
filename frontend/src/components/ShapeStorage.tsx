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
                        className={`w-2 h-2 border inline-block ${
                            cellValue === 1
                                ? playerNumber === 1
                                    ? "bg-cyan-400 border-cyan-300 shadow-sm shadow-cyan-400/30"
                                    : "bg-blue-400 border-blue-300 shadow-sm shadow-blue-400/30"
                                : "bg-slate-700 border-slate-600"
                        }`}
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

    const categories = [...new Set(shapes.map((shape) => shape.category))];

    return (
        <div className="bg-slate-900 p-6 rounded-xl min-w-80 max-w-96 border border-blue-500/30 shadow-2xl shadow-blue-500/10">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">
                    Pattern Library
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={rotateCounterclockwise}
                        className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/25"
                        title="Rotate Counterclockwise"
                    >
                        ↺
                    </button>
                    <button
                        onClick={rotateClockwise}
                        className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/25"
                        title="Rotate Clockwise"
                    >
                        ↻
                    </button>
                </div>
            </div>

            <div className="text-sm text-blue-300 mb-4">
                Select a pattern to place on the board
            </div>

            <div className="space-y-6 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-blue-500 scrollbar-thumb-rounded-md hover:scrollbar-thumb-blue-400">
                {categories.map((category) => (
                    <div key={category}>
                        <h4 className="text-sm font-semibold text-blue-300 mb-2 px-2">
                            {category}
                        </h4>
                        <div className="space-y-2">
                            {shapes
                                .filter((shape) => shape.category === category)
                                .map((shape) => (
                                    <div
                                        key={shape.id}
                                        className={`bg-slate-800 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                                            selectedShape?.id === shape.id
                                                ? "border-blue-400 bg-blue-900/20 shadow-lg shadow-blue-500/20"
                                                : "border-slate-600 hover:border-blue-500/50 hover:bg-slate-700"
                                        }`}
                                        onClick={() => handleShapeSelect(shape)}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex flex-col items-start">
                                                {renderShape(shape)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-semibold text-blue-300 mb-1">
                                                    {shape.name}
                                                </div>
                                                <div className="text-xs text-blue-400/80">
                                                    {shape.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-xs text-blue-400/80 mt-4 p-3 bg-slate-800 rounded-lg border border-blue-500/20">
                <div className="font-semibold mb-1">Controls:</div>
                <div>• Select a pattern to activate placement mode</div>
                <div>• Use rotation buttons to orient patterns</div>
                <div>• Click on the board to place selected pattern</div>
            </div>
        </div>
    );
};

export default ShapeStorage;
