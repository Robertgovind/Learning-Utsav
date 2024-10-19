import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

const studentModel = connection.define("student", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roll: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      return this.getDataValue("roll") + " correct form";
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("address", value + ", Nepal");
    },
  },
});

export default studentModel;
