import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    codigo: { type: String, require: true},
    descripcion: { type: String, require: true},
    precio: { type: Number, require: true},
    stock: { type: Number, require: true},
    foto: { type: String, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const productosSchema = model('productos', schema);