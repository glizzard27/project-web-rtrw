import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Admin = db.define(
    'data_admin',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true
    }
);

export default Admin;

(async () => {
    await db.sync();
})();
