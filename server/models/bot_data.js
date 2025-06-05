const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const BotData = sequelize.define(
  "bot_data",
  {
    price_data: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = { BotData };
