import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Producto } from "./Producto.js";
export const Cliente = sequelize.define("clientes",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:{
        type: DataTypes.STRING,
    },
    apellido:{
        type:DataTypes.STRING,
    },
},{
        timestamps: true
    

});

Cliente.hasMany(Producto, {
    foreinkey: "clienteId",
    sourceKey: "id",
  });
  Producto.belongsTo(Cliente, { foreinkey: "clienteId", targetId: "id" });