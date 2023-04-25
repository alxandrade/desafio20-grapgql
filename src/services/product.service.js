import Product from "../models/modeloProductos.js"
import Repository from "./repository.service.js";

export default class ProductService extends Repository {
  constructor(dao) {
    super(dao, Product.model);
  }
}
