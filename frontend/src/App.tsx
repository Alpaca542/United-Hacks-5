import { useState, useEffect } from "react";
import AuthForm from "./components/AuthForm";
import { auth } from "./components/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { getUsernameById } from "./components/usernameHelpers";
import CreatingGame from "./components/CreatingGame";
import MainLanding from "./components/MainLanding";

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [showAuth, setShowAuth] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // Get username when user is authenticated
                const fetchedUsername = await getUsernameById(currentUser.uid);
                setUsername(fetchedUsername);
                setShowAuth(false); // Hide auth form when user is authenticated
            } else {
                setUsername(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleAuthSuccess = async (uid: string) => {
        // The onAuthStateChanged listener will handle the state update
        const fetchedUsername = await getUsernameById(uid);
        setUsername(fetchedUsername);
    };

    const handleJoinGame = () => {
        setShowAuth(true);
    };

    const handleBackToLanding = () => {
        setShowAuth(false);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center animate-fade-in">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-cyan-400 border-t-transparent mx-auto mb-6"></div>
                    <div className="text-xl text-cyan-400 font-semibold mb-2">
                        Loading Conway's Battle...
                    </div>
                    <div className="text-sm text-slate-400">
                        Preparing your cellular warfare experience
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {user ? (
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-6 mb-6 border-2 border-slate-700/50">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">
                                        {(username || user.email || "U")
                                            .charAt(0)
                                            .toUpperCase()}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                                        Welcome, {username || user.email}!
                                    </div>
                                    <div className="text-slate-400 text-sm">
                                        Ready to battle in Conway's Game of
                                        Life?
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => auth.signOut()}
                                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 active:scale-95"
                            >
                                <div className="flex items-center gap-2">
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
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    Sign Out
                                </div>
                            </button>
                        </div>
                    </div>
                    <CreatingGame />
                </div>
            ) : showAuth ? (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="relative">
                        <button
                            onClick={handleBackToLanding}
                            className="absolute -top-16 left-0 text-slate-400 hover:text-cyan-400 transition-all duration-200 flex items-center gap-2 group"
                        >
                            <svg
                                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to Home
                        </button>
                        <AuthForm onAuthSuccess={handleAuthSuccess} />
                    </div>
                </div>
            ) : (
                <MainLanding onJoinGame={handleJoinGame} />
            )}
        </div>
    );
}

export default App;
