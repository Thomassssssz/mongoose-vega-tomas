import { Router } from "express";

import userRoutes from "./user.routes.js";
import vehiculoRoutes from "./vehiculo.routes.js";
import ordenRoutes from "./orden.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/vehiculos", vehiculoRoutes);
router.use("/ordenes", ordenRoutes);

export default router;
