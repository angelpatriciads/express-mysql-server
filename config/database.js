const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const { DB_NAME, DB_PASSWORD, DB_USER, DB_URI } = process.env;

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//   }
// );
const sequelize = new Sequelize(DB_URI, {
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
