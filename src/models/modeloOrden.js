import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    first_name: { type: String, require: true },
    email: { type: String, require: true },
    products: [],
    total: { type: Number, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const orderSchema = model("pedidos", schema);

