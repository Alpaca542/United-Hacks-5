import React, { useMemo } from "react";

interface FightingBarProps {
    grid: { [key: string]: number[] };
    gridSize?: number;
    showAnimatedNumbers?: boolean;
}

interface CellCounts {
    player1: number;
    player2: number;
    total: number;
}

const FightingBar: React.FC<FightingBarProps> = ({
    grid,
    gridSize = 60,
    showAnimatedNumbers = false,
}) => {
    // Memoized cell counting to prevent unnecessary recalculations
    const cellCounts = useMemo((): CellCounts => {
        let player1 = 0;
        let player2 = 0;

        // Efficient counting by iterating through the grid structure
        for (let row = 0; row < gridSize; row++) {
            const rowData = grid[`row${row}`];
            if (rowData) {
                for (let col = 0; col < gridSize; col++) {
                    const cellValue = rowData[col];
                    if (cellValue === 1) {
                        player1++;
                    } else if (cellValue === 2) {
                        player2++;
                    }
                }
            }
        }

        return {
            player1,
            player2,
            total: player1 + player2,
        };
    }, [grid, gridSize]);

    // Calculate percentages for the progress bar
    const percentages = useMemo(() => {
        const { player1, player2, total } = cellCounts;

        if (total === 0) {
            return { player1: 0, player2: 0 };
        }

        return {
            player1: (player1 / total) * 100,
            player2: (player2 / total) * 100,
        };
    }, [cellCounts]);

    // Determine the leading player for visual emphasis
    const leadingPlayer = useMemo(() => {
        const { player1, player2 } = cellCounts;

        if (player1 > player2) return 1;
        if (player2 > player1) return 2;
        return 0; // Tie
    }, [cellCounts]);

    return (
        <div className="w-full max-w-md mx-auto bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700/50 p-4 shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-slate-200 font-semibold text-sm">
                    Cell Count
                </h3>
                <div className="text-xs text-slate-400">
                    Total: {cellCounts.total}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-6 bg-slate-700/50 rounded-full overflow-hidden border border-slate-600/30">
                {/* Player 1 (Blue) Bar */}
                <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
                    style={{ width: `${percentages.player1}%` }}
                />

                {/* Player 2 (Red) Bar */}
                <div
                    className="absolute right-0 top-0 h-full bg-gradient-to-l from-red-500 to-red-600 transition-all duration-300 ease-out"
                    style={{ width: `${percentages.player2}%` }}
                />

                {/* Center divider line */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-slate-600/50 transform -translate-x-1/2" />
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mt-3 text-sm">
                {/* Player 1 Stats */}
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border border-blue-400/50" />
                    <span
                        className={`font-medium transition-colors duration-200 ${
                            leadingPlayer === 1
                                ? "text-blue-200"
                                : "text-slate-400"
                        }`}
                    >
                        {showAnimatedNumbers ? (
                            <AnimatedNumber value={cellCounts.player1} />
                        ) : (
                            cellCounts.player1
                        )}
                    </span>
                    <span className="text-xs text-slate-500">
                        ({percentages.player1.toFixed(1)}%)
                    </span>
                </div>

                {/* VS Indicator */}
                <div className="text-xs text-slate-500 font-medium">VS</div>

                {/* Player 2 Stats */}
                <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-500">
                        ({percentages.player2.toFixed(1)}%)
                    </span>
                    <span
                        className={`font-medium transition-colors duration-200 ${
                            leadingPlayer === 2
                                ? "text-red-200"
                                : "text-slate-400"
                        }`}
                    >
                        {showAnimatedNumbers ? (
                            <AnimatedNumber value={cellCounts.player2} />
                        ) : (
                            cellCounts.player2
                        )}
                    </span>
                    <div className="w-3 h-3 bg-gradient-to-br from-red-500 to-red-600 rounded-full border border-red-400/50" />
                </div>
            </div>

            {/* Leading Player Indicator */}
            {
                <div className="mt-2 text-center">
                    <div
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                            leadingPlayer === 1
                                ? "bg-blue-500/20 text-blue-200 border border-blue-500/30"
                                : leadingPlayer === 2
                                ? "bg-red-500/20 text-red-200 border border-red-500/30"
                                : "bg-slate-500/20 text-slate-300 border border-slate-500/30"
                        }`}
                    >
                        {leadingPlayer === 1
                            ? "Blue Leading"
                            : leadingPlayer === 2
                            ? "Red Leading"
                            : "Tied"}
                    </div>
                </div>
            }
        </div>
    );
};

// Optional animated number component for smooth transitions
const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
    const [displayValue, setDisplayValue] = React.useState(value);

    React.useEffect(() => {
        const duration = 200; // Animation duration in ms
        const startValue = displayValue;
        const endValue = value;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(
                startValue + (endValue - startValue) * easeOut
            );

            setDisplayValue(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, [value, displayValue]);

    return <span>{displayValue}</span>;
};

export default FightingBar;
