import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cliente } from "./Cliente.js";
export const Rol = sequelize.define( "rols", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombrerol: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Rol.hasMany(Cliente, {
    foreinkey: "rolId",
    sourceKey: "id",
  });
  Cliente.belongsTo(Rol, { foreinkey: "rolId", targetId: "id" });