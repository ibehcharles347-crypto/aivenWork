import { UserLogin } from "../models/UserLogin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    console.log("Registering user with data:", req.body);
    try {
        const {firstName, lastName, email, password } = req.body;
        console.log("Received registration data:", { email, password });

        if (!email || !password || !lastName || !firstName) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await UserLogin.findOne({ where: { userEmail: email } });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        };

        const hashedPassword = await bcrypt.hash(password, 10); 

        const newUser = await UserLogin.create({ userEmail:email, userPassword: hashedPassword, firstName:firstName, lastName:lastName });
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: error.message });
    }
};

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }
        const user = await UserLogin.findOne({ where: { userEmail: email } });
        console.log("User found:", user);
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }   
        const isPasswordValid = await bcrypt.compare(password, user.userPassword);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        const token = jwt.sign({userId: user.id, userEmail: user.userEmail}, process.env.JWT_SECRET, {expiresIn: "2m"});
        res.cookie("token", token, { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production", 
            sameSite: "None"
        });
        res.json({ message: "Login successful", token });
    }
    catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Failed to login" });
    }
};

export const getProfileInfo = async (req, res) => {
    let userId = req.user.userId;
    let user = await UserLogin.findByPk(userId, { attributes: ["userEmail", "userPassword", "lastName", "firstName"] });
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
};

