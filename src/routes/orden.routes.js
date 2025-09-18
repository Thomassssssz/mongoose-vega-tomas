import { Router } from "express";
import {
  getOrdenes,
  createOrden,
  updateOrden,
  deleteOrden,
} from "../controllers/orden.controller.js";

const router = Router();

router.get("/", getOrdenes);
router.post("/", createOrden);
router.put("/:id", updateOrden);
router.delete("/:id", deleteOrden);

export default router;
