import { Router } from "express";
import {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
  getProducto
} from "../controllers/productos.controller.js";

const router = Router();

// Routes
router.get("/productos",        getProductos);
router.post("/productos",       createProducto);
router.put("/productos/:id",    updateProducto);
router.delete("/productos/:id", deleteProducto);
router.get("/productos/:id",    getProducto);

export default router;
