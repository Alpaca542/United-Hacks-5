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
        <div>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {!isLogin && (
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                )}

                {error && <div style={{ color: "red" }}>{error}</div>}

                <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
                </button>
            </form>

            <button onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? "Sign Up" : "Login"}
            </button>
        </div>
    );
};

export default AuthForm;
