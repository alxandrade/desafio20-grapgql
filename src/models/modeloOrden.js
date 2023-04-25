import mongoose from "mongoose";

let schema = mongoose.Schema;

export default class Order {
  static get model() {
    return "orders";
  }

  static get schema() {
    return {
      first_name: { type: String, require: true },
      email: { type: String, require: true },
      products: [],
      total: { type: Number, require: true },
    }
  }
}

