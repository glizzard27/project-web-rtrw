import { Sequelize } from "sequelize";

const db = new Sequelize('rtrw_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;