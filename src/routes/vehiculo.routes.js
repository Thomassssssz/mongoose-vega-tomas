import { Router } from "express";
import {
  getVehiculos,
  createVehiculo,
  deleteVehiculo,
} from "../controllers/vehiculo.controller.js";

const router = Router();

router.get("/", getVehiculos);
router.post("/", createVehiculo);
router.delete("/:id", deleteVehiculo);

export default router;
