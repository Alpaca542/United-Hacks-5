// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-EnuWkZgnjb6hnaP4LhUIZvxSCf5tiIo",
    authDomain: "game-of-trust-675c9.firebaseapp.com",
    projectId: "game-of-trust-675c9",
    storageBucket: "game-of-trust-675c9.firebasestorage.app",
    messagingSenderId: "72708199445",
    appId: "1:72708199445:web:ce23ac49a6c15fe7f02a1c",
    measurementId: "G-K3GSYXR89X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);
const db = getFirestore(app);
const auth = getAuth(app);
export const functions = getFunctions(app, "us-central1");

// Connect to Functions emulator in development
connectFunctionsEmulator(functions, "localhost", 5001);

export { rtdb, db, auth };
