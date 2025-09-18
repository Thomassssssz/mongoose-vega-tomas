import { VehiculoModel } from "../models/vehiculo.model.js";

export const getVehiculos = async (req, res) => {
  try {
    const vehiculos = await VehiculoModel.find().populate("owner");
    res.status(200).json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener vehículos", error });
  }
};

export const createVehiculo = async (req, res) => {
  try {
    const vehiculo = new VehiculoModel(req.body);
    await vehiculo.save();
    res.status(201).json(vehiculo);
  } catch (error) {
    res.status(500).json({ message: "Error al crear vehículo", error });
  }
};

export const deleteVehiculo = async (req, res) => {
  try {
    const vehiculo = await VehiculoModel.findByIdAndUpdate(
      req.params.id,
      { active: false },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Vehículo eliminado lógicamente", vehiculo });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar vehículo", error });
  }
};
