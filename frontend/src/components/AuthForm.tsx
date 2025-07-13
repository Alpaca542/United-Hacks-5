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
        <div className="max-w-md mx-auto mt-8 p-8 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 rounded-3xl shadow-2xl border-2 border-slate-700/60 backdrop-blur-sm animate-fade-in hover:shadow-3xl hover:shadow-cyan-500/10 transition-all duration-500">
            {/* Header with enhanced styling */}
            <div className="text-center mb-8 animate-slide-in">
                <div className="inline-block p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4 border border-cyan-500/30 animate-pulse-glow">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-3">
                    {isLogin ? "Welcome Back" : "Join the Battle"}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {isLogin
                        ? "Sign in to your account to continue your cellular warfare journey"
                        : "Create your account to start commanding cellular armies"}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-semibold text-slate-300 flex items-center gap-2"
                    >
                        <svg
                            className="w-4 h-4 text-cyan-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-describedby="email-hint"
                        className="w-full px-4 py-3 bg-slate-800/80 border border-slate-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm shadow-inner hover:border-slate-500/80 focus:scale-[1.02] active:scale-[0.98]"
                        placeholder="Enter your email address"
                    />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <label
                        htmlFor="password"
                        className="text-sm font-semibold text-slate-300 flex items-center gap-2"
                    >
                        <svg
                            className="w-4 h-4 text-cyan-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-describedby="password-hint"
                        className="w-full px-4 py-3 bg-slate-800/80 border border-slate-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm shadow-inner hover:border-slate-500/80 focus:scale-[1.02] active:scale-[0.98]"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Username Field (Registration only) */}
                {!isLogin && (
                    <div className="space-y-2 animate-fade-in">
                        <label
                            htmlFor="username"
                            className="text-sm font-semibold text-slate-300 flex items-center gap-2"
                        >
                            <svg
                                className="w-4 h-4 text-cyan-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            aria-describedby="username-hint"
                            className="w-full px-4 py-3 bg-slate-800/80 border border-slate-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm shadow-inner hover:border-slate-500/80 focus:scale-[1.02] active:scale-[0.98]"
                            placeholder="Choose a unique username"
                        />
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div
                        className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 backdrop-blur-sm animate-fade-in"
                        role="alert"
                        aria-live="polite"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-red-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg
                                    className="w-4 h-4 text-red-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div className="text-red-300 text-sm leading-relaxed">
                                {error}
                            </div>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    aria-label={
                        isLogin
                            ? "Sign in to your account"
                            : "Create new account"
                    }
                    className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 disabled:shadow-slate-500/25 disabled:cursor-not-allowed backdrop-blur-sm animate-float active:scale-95"
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-3">
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                            <span>
                                {isLogin
                                    ? "Signing in..."
                                    : "Creating account..."}
                            </span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-2">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isLogin
                                            ? "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                            : "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                    }
                                />
                            </svg>
                            <span>
                                {isLogin ? "Sign In" : "Create Account"}
                            </span>
                        </div>
                    )}
                </button>
            </form>

            {/* Toggle Form Type */}
            <div className="mt-8 text-center">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-600/50"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 text-slate-400">
                            {isLogin
                                ? "New to Conway's Battle?"
                                : "Already have an account?"}
                        </span>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    aria-label={
                        isLogin
                            ? "Switch to create new account"
                            : "Switch to sign in"
                    }
                    className="mt-4 w-full py-3 px-6 bg-slate-800/80 hover:bg-slate-700/90 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 border border-slate-600/60 hover:border-slate-500/80 backdrop-blur-sm transform hover:scale-105 active:scale-95 shadow-lg"
                >
                    <div className="flex items-center justify-center gap-2">
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
                                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                            />
                        </svg>
                        <span>
                            {isLogin ? "Create New Account" : "Sign In Instead"}
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AuthForm;
