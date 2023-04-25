import Cart from "../models/modeloCarritos.js";
import Repository from "./repository.service.js";

export default class CartService extends Repository {
  constructor(dao) {
    super(dao, Cart.model);
  }
}
