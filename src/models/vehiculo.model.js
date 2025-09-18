import { Schema, model } from "mongoose";

const VehiculoSchema = new Schema(
  {
    plate: {
      type: String,
      required: true,
      unique: true,
    },
    brand: String,
    model: String,
    year: Number,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const VehiculoModel = model("Vehiculo", VehiculoSchema);
