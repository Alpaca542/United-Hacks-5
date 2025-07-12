import { useState, useEffect } from "react";
import AuthForm from "./components/AuthForm";
import { auth } from "./components/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { getUsernameById } from "./components/usernameHelpers";
import CreatingGame from "./components/CreatingGame";

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // Get username when user is authenticated
                const fetchedUsername = await getUsernameById(currentUser.uid);
                setUsername(fetchedUsername);
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

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
                <div className="text-xl text-blue-400 animate-pulse">
                    Loading...
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {user ? (
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-slate-800 rounded-xl shadow-2xl p-6 mb-6 border border-blue-500/30">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-2xl font-bold text-blue-400 drop-shadow-lg">
                                Welcome, {username || user.email}!
                            </div>
                            <button
                                onClick={() => auth.signOut()}
                                className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                    <CreatingGame />
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-screen">
                    <AuthForm onAuthSuccess={handleAuthSuccess} />
                </div>
            )}
        </div>
    );
}

export default App;
