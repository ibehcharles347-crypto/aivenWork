import express from "express";
import {sequelize} from "./dbconfig/db.js";
import dotenv from "dotenv";
import "./models/index.js";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import fs from "fs";
import path from "path";


dotenv.config()
const PORT = 5000;
const app = express()
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "https://aiven-work.vercel.app"], 
}))
app.use(express.json());
const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
app.use("/uploads", express.static("uploads")); 

app.use("/api", userRoute);
try {
  await sequelize.authenticate();
  console.log("✅ Connection established successfully!");
  await sequelize.sync({alter: true}); 
    console.log("✅ Models synced successfully!");
} catch (error) {
  console.error("❌ Unable to connect to database:", error);
}

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
