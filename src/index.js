import app from './app.js'
import { sequelize } from './database/database.js'

  
   import './models/Cliente.js'
   import './models/Producto.js'
   import './models/Rol.js'
async function main (){
    try {
        await sequelize.sync({force: true})
    console.log('Conectado')
    app.listen(3000)
console.log('server is listening on port ' ,3000)
    } catch (error) {
        console.log('No se conecto')
        
    }
}
main();