const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  dialect: "mysql",
});

module.exports = sequelize;
