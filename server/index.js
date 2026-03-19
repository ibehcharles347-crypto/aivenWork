import express from "express";
import {sequelize} from "./dbconfig/db.js";
import dotenv from "dotenv";
import "./models/index.js";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import fs from "fs";
import path from "path";
import userLoginRoute from "./routes/userLoginRoute.js";
import cookieParser from "cookie-parser";


dotenv.config()
const PORT = 5000;
const app = express()
app.use(cookieParser());
app.use(cors({
    origin: "https://aiven-work.vercel.app", 
    credentials: true,
}))
app.use(express.json());
const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
app.use("/uploads", express.static("uploads")); 

app.use("/api", userRoute);
app.use("/api", userLoginRoute);
try {
  await sequelize.authenticate();
  console.log("✅ Connection established successfully!");
  // await sequelize.sync({alter: true}); 
  await sequelize.sync();
    console.log("✅ Models synced successfully!");
} catch (error) {
  console.error("❌ Unable to connect to database:", error);
}

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
