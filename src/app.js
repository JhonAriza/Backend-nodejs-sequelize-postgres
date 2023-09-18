import express from 'express' 
import clientesRoutes from "./routes/clientes.routes.js";
import productosRoutes from './routes/productos.routes.js'
import rolsRoutes from './routes/rols.routes.js'

const app = express()

app.use(express.json());

app.use(clientesRoutes);
app.use(productosRoutes);
app.use(rolsRoutes);
export default app;