import { Sequelize } from "sequelize";

export const userModel = (sequelize) => {
    const { DataTypes } = Sequelize;

    return sequelize.define("user", { 
        name: {
            type: DataTypes.TEXT,
        },
        email: {
            type: DataTypes.TEXT,
        }
    }, {
        tableName: "user",  // Force table name to be "user"
        timestamps: false   // Disable createdAt & updatedAt if not needed
    });
};
