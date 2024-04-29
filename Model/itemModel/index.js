import sequelize from "../../DB/config.js"
import { DataTypes } from "sequelize"

const itemModel = sequelize.define(
  "Items",
  {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Detail: {
      type: DataTypes.STRING,
    },
    UnitPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Quantity: {
      type: DataTypes.STRING,
    },
    Barcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
)

export default itemModel
