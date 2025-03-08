import { Sequelize } from "sequelize";
import { userModel } from "./model/user.js";

const sequelize = new Sequelize("sql", "postgres", "Lavish@123", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});

const User = userModel(sequelize); // Define User model globally

export const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await sequelize.sync();
        console.log("Table Created Successfully");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export { User };
