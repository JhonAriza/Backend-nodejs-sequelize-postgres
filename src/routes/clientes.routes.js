import { Router } from "express";
import { createCliente,deleteCliente,getClientes, updateCliente,getCliente,
    getClienteProductos  } from "../controllers/clientes.controller.js";

const router = Router();
router.post("/clientes", createCliente);
router.get("/clientes", getClientes);
router.put("/clientes/:id", updateCliente);
router.delete("/clientes/:id", deleteCliente);
router.get("/clientes/:id", getCliente);

router.get("/clientes/:id/productos", getClienteProductos);
export default router;

 