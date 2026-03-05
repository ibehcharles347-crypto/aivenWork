import express from "express";
import {NewUser, getUsers, updateUser, deleteUser} from "../controller/User.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/addUser", upload.single("image"), NewUser);
router.get("/users", getUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;