import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Producto = sequelize.define(
  "producto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.STRING,
    },
    cantidad: {
      type: DataTypes.STRING,
    },
    fecha: {
      type: DataTypes.STRING,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);