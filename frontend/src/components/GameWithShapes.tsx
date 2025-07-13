import React, { useState } from "react";
import GameCanvas from "./GameCanvas";
import ShapeStorage from "./ShapeStorage";

// Component showing how to integrate GameCanvas with ShapeStorage
interface GameWithShapesProps {
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
    onShapeDrop?: (shape: any, dropRow: number, dropCol: number) => void;
    onClearPlayerCells?: () => void;
    onToggleReadyForFight?: () => void;
    gridSize?: number;
}

const GameWithShapes: React.FC<GameWithShapesProps> = ({
    game,
    currentUser,
    onCellClick,
    onShapeDrop,
    onClearPlayerCells,
    onToggleReadyForFight,
    gridSize = 60,
}) => {
    const [selectedShape, setSelectedShape] = useState<any>(null);

    const getPlayerNumber = (): number => {
        if (!currentUser) return 0;
        if (game.user1?.uid === currentUser.uid) return 1;
        if (game.user2?.uid === currentUser.uid) return 2;
        return 0;
    };

    const handleShapeSelect = (shape: any) => {
        setSelectedShape(shape);
    };

    const handleShapePlace = (shape: any, row: number, col: number) => {
        if (onShapeDrop) {
            onShapeDrop(shape, row, col);
        }
        // Optionally deselect shape after placement
        // setSelectedShape(null);
    };

    const handleClearSelectedShape = () => {
        setSelectedShape(null);
    };

    return (
        <div className="min-h-screen from-slate-900 via-slate-800 to-slate-900 p-4">
            <div className="max-w-[1920px] mx-auto h-full">
                <div className="flex flex-col xl:flex-row gap-6 h-full">
                    {/* Shape Storage - 1/3 of the width */}
                    <div className="flex-1 xl:flex-none xl:w-1/3 flex justify-center">
                        <div className="w-full max-w-sm xl:max-w-none">
                            <ShapeStorage
                                playerNumber={getPlayerNumber()}
                                onShapeSelect={handleShapeSelect}
                                selectedShape={selectedShape}
                            />
                        </div>
                    </div>

                    {/* Game Canvas - 2/3 of the width (twice as large) */}
                    <div className="flex-1 xl:flex-none xl:w-2/3 flex justify-center items-center">
                        <div className="w-full max-w-5xl">
                            <GameCanvas
                                game={game}
                                currentUser={currentUser}
                                onCellClick={onCellClick}
                                onShapeDrop={onShapeDrop}
                                selectedShape={selectedShape}
                                onShapePlace={handleShapePlace}
                                onClearSelectedShape={handleClearSelectedShape}
                                onClearPlayerCells={onClearPlayerCells}
                                onToggleReadyForFight={onToggleReadyForFight}
                                gridSize={gridSize}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameWithShapes;
