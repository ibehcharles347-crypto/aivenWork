import React, { useState, createContext, useContext, useEffect } from "react";
import API from "../util/api";
import "../Dashboard.css"

const userContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        try {
            setLoading(true);
            const response = await API.get("/api/profile");
            console.log(response)
            setUser(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <userContext.Provider value={{ user, loading, error, setUser, fetchUser }}>
            {children}
        </userContext.Provider>
    );
};

export const useUser = () => useContext(userContext);