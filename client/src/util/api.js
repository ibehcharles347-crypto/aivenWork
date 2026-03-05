import axios from "axios";

const API = axios.create({
    baseURL: "https://aivenwork.onrender.com/"
});

export default API;