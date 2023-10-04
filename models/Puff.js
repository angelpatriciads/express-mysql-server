const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const puff = sequelize.define(
  "Puff",
  {
    PuffID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    KambuhID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = puff;
