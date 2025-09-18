import { Schema, model } from "mongoose";

const serviceItemSchema = new Schema(
  {
    name: String,
    price: Number,
    qty: {
      type: Number,
      default: 1,
    },
  },
  { _id: false }
);

const OrdenSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: "Vehiculo",
      required: true,
    },
    employees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    items: [serviceItemSchema],
    status: {
      type: String,
      enum: ["pending", "in_progress", "done", "cancelled"],
      default: "pending",
    },
    scheduledAt: Date,
    finishedAt: Date,
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

export const OrdenModel = model("Orden", OrdenSchema);
