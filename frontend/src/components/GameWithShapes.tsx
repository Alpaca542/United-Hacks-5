import React, { useState } from "react";
import GameCanvas from "./GameCanvas";
import ShapeStorage from "./ShapeStorage";

// Component showing how to integrate GameCanvas with ShapeStorage
interface GameWithShapesProps {
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
    onShapeDrop?: (shape: any, dropRow: number, dropCol: number) => void;
    gridSize?: number;
}

const GameWithShapes: React.FC<GameWithShapesProps> = ({
    game,
    currentUser,
    onCellClick,
    onShapeDrop,
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-8 items-start">
                    <div className="w-96 flex-shrink-0">
                        <ShapeStorage
                            playerNumber={getPlayerNumber()}
                            onShapeSelect={handleShapeSelect}
                            selectedShape={selectedShape}
                        />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <GameCanvas
                            game={game}
                            currentUser={currentUser}
                            onCellClick={onCellClick}
                            onShapeDrop={onShapeDrop}
                            selectedShape={selectedShape}
                            onShapePlace={handleShapePlace}
                            gridSize={gridSize}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameWithShapes;
