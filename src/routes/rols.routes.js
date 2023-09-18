import { Router } from "express";
import {
    getRols,
    createRol,
    updateRol,
    deleteRol,
    getRol
} from "../controllers/rols.controller.js";

const router = Router();

// Routes
router.get("/rols",        getRols);
router.post("/rols",       createRol);
router.put("/rols/:id",    updateRol);
router.delete("/rols/:id", deleteRol);
router.get("/rols/:id",    getRol);

export default router;
