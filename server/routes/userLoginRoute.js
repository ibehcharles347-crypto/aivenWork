import express from "express";
import {registerUser, getProfileInfo, Login} from "../controller/UserLogin.js";
import { validateUserInput, handleValidationErrors } from "../middleware/input.js";
import authenticateToken from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/register", validateUserInput, handleValidationErrors, registerUser);
router.get("/profile", authenticateToken, getProfileInfo);
router.post("/login", Login);

export default router;