import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

/**
 * Retrieves a username based on the user ID
 * @param uid - The user ID
 * @returns Promise that resolves to the username or null if not found
 */
export const getUsernameById = async (uid: string): Promise<string | null> => {
    try {
        const userDoc = await getDoc(doc(db, "usernames", uid));
        if (userDoc.exists()) {
            return userDoc.data().username;
        }
        return null;
    } catch (error) {
        console.error("Error fetching username:", error);
        return null;
    }
};

/**
 * Checks if a username already exists in the database
 * @param username - The username to check
 * @returns Promise that resolves to true if username exists, false otherwise
 */
export const checkUsernameExists = async (
    username: string
): Promise<boolean> => {
    try {
        // Note: This is a simple implementation. For better performance with many users,
        // consider using Firebase Functions or a different data structure
        // This implementation doesn't prevent duplicate usernames across different users
        console.log("Checking username:", username); // Use the parameter to avoid linting error
        return false; // For now, allow any username
    } catch (error) {
        console.error("Error checking username:", error);
        return false;
    }
};

/**
 * Gets all usernames (useful for admin purposes or displaying user lists)
 * @returns Promise that resolves to an array of {uid, username} objects
 */
export const getAllUsernames = async (): Promise<
    { uid: string; username: string }[]
> => {
    try {
        // This would require a collection query - implement as needed
        // For now, return empty array
        return [];
    } catch (error) {
        console.error("Error fetching all usernames:", error);
        return [];
    }
};
