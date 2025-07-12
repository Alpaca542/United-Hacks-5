import { useState, useEffect } from "react";
import GameCanvas from "./components/GameCanvas";
import AuthForm from "./components/AuthForm";
import { auth } from "./components/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { getUsernameById } from "./components/usernameHelpers";

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
        return <div>Loading...</div>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <div>Welcome, {username || user.email}!</div>
                    <button onClick={() => auth.signOut()}>Logout</button>
                    <GameCanvas />
                </div>
            ) : (
                <AuthForm onAuthSuccess={handleAuthSuccess} />
            )}
        </div>
    );
}

export default App;
