import React, { useState } from "react";
import { auth, db } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
interface AuthFormProps {
    onAuthSuccess: (uid: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onAuthSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (isLogin) {
                // Sign in
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                onAuthSuccess(userCredential.user.uid);
            } else {
                // Sign up
                if (!username.trim()) {
                    setError("Username is required for registration");
                    return;
                }

                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                // Save username to Firestore
                await setDoc(doc(db, "usernames", userCredential.user.uid), {
                    username: username.trim(),
                    createdAt: new Date().toISOString(),
                });

                onAuthSuccess(userCredential.user.uid);
            }
        } catch (err: any) {
            setError(err.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-8 bg-gray-900 rounded-xl shadow-2xl border border-cyan-500/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400 glow-text">
                {isLogin ? "Login" : "Sign Up"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-cyan-300">
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-cyan-300">
                        Password:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                    />
                </div>

                {!isLogin && (
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-cyan-300">
                            Username:
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                        />
                    </div>
                )}

                {error && (
                    <div className="text-red-300 text-sm text-center bg-red-900/30 p-3 rounded-lg border border-red-500/50">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                    {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
                </button>
            </form>

            <button
                onClick={() => setIsLogin(!isLogin)}
                className="w-full mt-6 py-3 px-6 bg-gray-800 text-cyan-300 font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
            >
                Switch to {isLogin ? "Sign Up" : "Login"}
            </button>
        </div>
    );
};

export default AuthForm;
