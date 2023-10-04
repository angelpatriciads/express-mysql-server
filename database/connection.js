const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("inhaler", "angel", "password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
