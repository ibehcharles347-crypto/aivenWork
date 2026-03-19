import axios from "axios";

const API = axios.create({
    baseURL: "https://aivenwork.onrender.com",
    // baseURL: "http://localhost:5000",
    withCredentials: true, // Include cookies in requests
});

export default API;