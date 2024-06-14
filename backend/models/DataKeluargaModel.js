import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Keluarga = db.define('data_keluarga', {
    id_keluarga: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_keluarga: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    alamat: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    freezeTableName: true
});

export default Keluarga;

(async () => {
    await db.sync();
})();