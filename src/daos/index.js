import dotenv from "dotenv";
import { ProductosDaoMongo } from "./productos/productosDaoMongo.js";
import { ProductosDaoSql } from "./productos/productosDaoSql.js";
import { CarritosDaoSql } from "./carritos/carritosDaoSql.js";
import { CarritosDaoMongo } from "./carritos/carritosDaoMongo.js";
import { OrdenesDaoMongo } from "./orders/ordersDaoMongo.js";

dotenv.config();

let productosDao;
let carritosDao;
let ordenesDao;

switch (process.env.VAR_DB_PERSISTENCIA) {
  case "mongo":
    productosDao = ProductosDaoMongo;
    carritosDao = CarritosDaoMongo;
    ordenesDao = OrdenesDaoMongo;
    import("../config/configMongo.js").then((mod) => mod.init());
    break;
  case "mysql":
    productosDao = ProductosDaoSql;
    carritosDao = CarritosDaoSql;
    ordenesDao = OrdenesDaoMongo;
    break;
  default:
    break;
}

export { productosDao, carritosDao, ordenesDao };
