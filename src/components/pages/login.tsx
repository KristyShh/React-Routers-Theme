import React, { useContext, useState } from "react";
import { AuthContext } from "../authContent";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.state?.from?.pathname || '/';
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (login && password) {
            // Perform your login logic here
            // For demonstration, assuming login is successful
            signIn(true, () => navigate(path, { replace: true }));
        } else {
            setError("Please provide both login and password.");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="username">User Name</label>
            <input 
                type="text" 
                id="username" 
                value={login} 
                onChange={(event) => setLogin(event.target.value)} 
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)} 
            />
            <button type="submit">Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};
