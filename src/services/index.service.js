import ModelsMongoDAO from "../daos/modelsDAO.models.js";
import UserService from "./user.service.js";
import ProductService from "./product.service.js";
import CartService from "./carrito.service.js";
import OrderService from "./order.service.js";
import dotenv from 'dotenv'

dotenv.config();

let dao;
switch (process.env.VAR_DB_PERSISTENCIA) {
  case "MONGO":
    dao = new ModelsMongoDAO(process.env.MONGO_URL);
    break;
  default:
    break;
}

export const userService = new UserService(dao);
export const productService = new ProductService(dao);
export const cartService = new CartService(dao);
export const orderService = new OrderService(dao);