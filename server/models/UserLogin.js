import { DataTypes } from "sequelize";
import { sequelize } from "../dbconfig/db.js";

export const UserLogin = sequelize.define("UserLogin", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

