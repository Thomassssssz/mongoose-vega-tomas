import { OrdenModel } from "../models/orden.model.js";

export const getOrdenes = async (req, res) => {
  try {
    const ordenes = await OrdenModel.find()
      .populate("customer")
      .populate("vehicle")
      .populate("employees");
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener órdenes", error });
  }
};

export const createOrden = async (req, res) => {
  try {
    const orden = new OrdenModel(req.body);
    await orden.save();
    res.status(201).json(orden);
  } catch (error) {
    res.status(500).json({ message: "Error al crear orden", error });
  }
};

export const updateOrden = async (req, res) => {
  try {
    const orden = await OrdenModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(orden);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar orden", error });
  }
};

export const deleteOrden = async (req, res) => {
  try {
    const orden = await OrdenModel.findByIdAndUpdate(
      req.params.id,
      { active: false },
      { new: true }
    );
    res.status(200).json({ message: "Orden eliminada lógicamente", orden });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar orden", error });
  }
};
