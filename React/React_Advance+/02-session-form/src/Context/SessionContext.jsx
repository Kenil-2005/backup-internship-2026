import React, { createContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SessionContext = createContext();

const SESSION_KEY = "session";
const LOGIN_KEY = "login";
const LOGOUT_KEY = "logout";

export const SessionProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const logout = useCallback((triggerEvent = true) => {
        localStorage.removeItem(SESSION_KEY);
        setIsLoggedIn(false);
        navigate("/login");

        if (triggerEvent) {
            localStorage.setItem(LOGOUT_KEY, Date.now());
        }
    }, [navigate]);

    const login = () => {
        const token = crypto.randomUUID();

        const expiryTime = Date.now() + 30000;
        const cookieExpiry = new Date(expiryTime).toUTCString();

        document.cookie = `token=${token}; expires=${cookieExpiry}; path=/`;

        const session = {
            JWT: token,
            isLoggedIn: true,
            expiry: expiryTime,
        };

        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        localStorage.setItem(LOGIN_KEY, Date.now());
        setIsLoggedIn(true);
        navigate("/dashboard");
    };

    useEffect(() => {
        const session = JSON.parse(localStorage.getItem(SESSION_KEY));
        if (session && Date.now() < session.expiry) {
            setIsLoggedIn(true);
        } else {
            localStorage.removeItem(SESSION_KEY);
            setIsLoggedIn(false);
        }
    }, [])

    useEffect(() => {
        const handleStorage = (event) => {

            if (event.key === LOGIN_KEY) {
                const session = JSON.parse(localStorage.getItem(SESSION_KEY));

                if (session && Date.now() < session.expiry) {
                    setIsLoggedIn(true);
                } else {
                    localStorage.removeItem(SESSION_KEY);
                    setIsLoggedIn(false);
                }
            }
            if (event.key === LOGOUT_KEY) {
                logout(false);
            }
        };

        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, [logout]);

    useEffect(() => {
        const interval = setInterval(() => {
            const session = JSON.parse(localStorage.getItem(SESSION_KEY));
            if (!session || Date.now() > session.expiry) {
                logout();
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [logout])

    return <SessionContext.Provider value={{ isLoggedIn, login, logout }}>{children}</SessionContext.Provider>;
};

export default SessionContext;