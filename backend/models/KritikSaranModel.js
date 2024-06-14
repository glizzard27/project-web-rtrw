import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const KritikSaran = db.define(
    'data_kritiksaran',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pesan: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        freezeTableName: true
    }
);

export default KritikSaran;

(async () => {
    await db.sync();
})();