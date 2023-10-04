const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Kambuh = sequelize.define(
  "Kambuh",
  {
    KambuhID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Ends: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    TotalPuff: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    LamaKambuh: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Kambuh;
