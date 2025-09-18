import express from "express";
import dotenv from "dotenv";
import { startDB } from "./src/config/database.js";
import routes from "./src/routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());

// Rutas
app.use("/api", routes);

app.listen(PORT, async () => {
  await startDB();
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
