import sequelize from "../../DB/config.js"
import { DataTypes } from "sequelize"

const Transaction = sequelize.define(
  "Transaction",
  {
    transactionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {}
)

export default Transaction
