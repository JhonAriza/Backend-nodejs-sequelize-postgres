import Sequelize from 'sequelize' 

   export const sequelize = new Sequelize('Proyecto_inventario','postgres','postgres',{
        host:'localhost',
        dialect:'postgres'
    })
