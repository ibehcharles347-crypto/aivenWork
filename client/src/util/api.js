import axios from "axios";

const API = axios.create({
    baseURL: "https://aivenwork.onrender.com",
    // baseURL: "http://localhost:5000",
    withCredentials: true, // Include cookies in requests
});
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default API;