import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";

// Define the function types
export interface CreateGameData {
    userId: string;
    username: string;
}

export interface JoinGameData {
    gameId: string;
    userId: string;
    username: string;
}

export interface CreateGameResponse {
    gameId: string;
    success: boolean;
}

export interface JoinGameResponse {
    success: boolean;
}

export interface StartFightingResponse {
    success: boolean;
    winner: string;
}

export interface ScheduleGameTransitionResponse {
    success: boolean;
    message: string;
}

// Cloud function references
const createGameFunction = httpsCallable<CreateGameData, CreateGameResponse>(
    functions,
    "createGame"
);
const joinGameFunction = httpsCallable<JoinGameData, JoinGameResponse>(
    functions,
    "joinGame"
);
const startFightingFunction = httpsCallable<
    { gameId: string },
    StartFightingResponse
>(functions, "startFightingPhase");
const scheduleTransitionFunction = httpsCallable<
    { gameId: string },
    ScheduleGameTransitionResponse
>(functions, "scheduleGameTransition");

// Export the functions
export const createGame = async (
    userId: string,
    username: string
): Promise<CreateGameResponse> => {
    try {
        const result = await createGameFunction({ userId, username });
        return result.data;
    } catch (error) {
        console.error("Error calling createGame function:", error);
        throw error;
    }
};

export const joinGame = async (
    gameId: string,
    userId: string,
    username: string
): Promise<JoinGameResponse> => {
    try {
        const result = await joinGameFunction({ gameId, userId, username });
        return result.data;
    } catch (error) {
        console.error("Error calling joinGame function:", error);
        throw error;
    }
};

export const startFightingPhase = async (
    gameId: string
): Promise<StartFightingResponse> => {
    try {
        const result = await startFightingFunction({ gameId });
        return result.data;
    } catch (error) {
        console.error("Error calling startFightingPhase function:", error);
        throw error;
    }
};

export const scheduleGameTransition = async (
    gameId: string
): Promise<ScheduleGameTransitionResponse> => {
    try {
        const result = await scheduleTransitionFunction({ gameId });
        return result.data;
    } catch (error) {
        console.error("Error calling scheduleGameTransition function:", error);
        throw error;
    }
};
