const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Puff = sequelize.define(
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
    timestamps: false, // Disable the creation of createdAt and updatedAt fields
  }
);

module.exports = Puff;
