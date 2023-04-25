import mongoose from "mongoose";

let schema = mongoose.Schema;

export default class Product {

  static get model() {
    return "productos"
  }

  static get shema (){
    return {
      codigo: { type: String, require: true},
      descripcion: { type: String, require: true},
      precio: { type: Number, require: true},
      stock: { type: Number, require: true},
      foto: { type: String, require: true },
    }
  }
}

