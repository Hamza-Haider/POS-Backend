import sequelize from "../../DB/config.js"
import { DataTypes } from "sequelize"

const userModel = sequelize.define(
  "Users",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName:{
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }

  },
  {}
)

export default userModel
