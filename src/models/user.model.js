import { Schema, model } from "mongoose";

const profileSchema = new Schema(
  {
    age: Number,
    phone: String,
    address: {
      street: String,
      number: Number,
      city: String,
    },
  },
  { _id: false }
);

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["cliente", "empleado", "admin"],
      default: "cliente",
    },
    profile: profileSchema, //<-----Embebido
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

export const UserModel = model("User", UserSchema);
