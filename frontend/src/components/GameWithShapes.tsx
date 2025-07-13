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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-2 sm:p-4 overflow-hidden">
            <div className="max-w-full mx-auto h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)]">
                <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4 h-full">
                    {/* Shape Storage - Flexible width sidebar */}
                    <div className="lg:col-span-1 xl:col-span-1 flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="w-full max-w-sm lg:max-w-none h-full">
                            <ShapeStorage
                                playerNumber={getPlayerNumber()}
                                onShapeSelect={handleShapeSelect}
                                selectedShape={selectedShape}
                            />
                        </div>
                    </div>

                    {/* Game Canvas - Takes remaining space */}
                    <div className="lg:col-span-4 xl:col-span-5 flex justify-center items-center overflow-hidden order-1 lg:order-2">
                        <div className="w-full h-full flex items-center justify-center">
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
