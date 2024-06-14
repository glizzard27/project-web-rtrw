import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const { DataTypes } = Sequelize;
const Warga = db.define('data_warga', {
    id_warga: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_keluarga: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'data_keluarga',
            key: 'id_keluarga',
        },
    },
    nama: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    usia: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    jk: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    posisi: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    agama: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    pendidikan: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    freezeTableName: true
});

export default Warga;


(async () => {
    await db.sync();
})();