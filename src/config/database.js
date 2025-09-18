// Conexión a MongoDB con Mongoose

import mongoose from "mongoose";

export const startDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(" Conectado a la base de datos ");
  } catch (error) {
    console.error(" No se pudo conectar a la base de datos:", error);
  }
};
