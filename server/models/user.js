const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define(
  "user_info",
  {
    telegramId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    referrerId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    referralBonusPercent: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
    },
    clickBonusLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    rouletteMultiplierLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    cooldownLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    passiveIncomeLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    referralLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    referrals: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
    clickBonusExp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    rouletteMultiplierExp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    cooldownExp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    referralExp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    passiveIncomeExp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    clickBonusCost: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
    rouletteMultiplierCost: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
    cooldownCost: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    referralCost: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    passiveIncomeCost: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    lastSpinTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    earned: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = { sequelize, User };
