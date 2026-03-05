import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DB_NAME,      // ✅ database
  process.env.DB_USER,      // ✅ user
  process.env.DB_PASSWORD,  // ✅ password
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false, // Disable logging; default: console.log
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

// Test connection
// try {
//   await sequelize.authenticate();
//   console.log("✅ Connection established successfully!");
//   await sequelize.sync({alter: true}); // Sync models with the database
//     console.log("✅ Models synced successfully!");
// } catch (error) {
//   console.error("❌ Unable to connect to database:", error);
// }