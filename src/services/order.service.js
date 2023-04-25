import Order from "../models/modeloOrden.js";
import Repository from "./repository.service.js";

export default class OrderService extends Repository {
  constructor(dao) {
    super(dao, Order.model);
  }
}
