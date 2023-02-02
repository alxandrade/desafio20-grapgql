import dotenv from "dotenv";
import { ProductosDaoMongo } from "./productos/productosDaoMongo.js";
import { ProductosDaoSql } from "./productos/productosDaoSql.js";
import { CarritosDaoSql } from "./carritos/carritosDaoSql.js";
import { CarritosDaoMongo } from "./carritos/carritosDaoMongo.js";

dotenv.config();

let productosDao;
let carritosDao;

switch (process.env.VAR_DB_PERSISTENCIA) {
  case "mongo":
    productosDao = ProductosDaoMongo;
    carritosDao = CarritosDaoMongo;
    import("../config/configMongo.js").then((mod) => mod.init());
    break;
  case "mysql":
    productosDao = ProductosDaoSql;
    carritosDao = CarritosDaoSql;
    break;
  default:
    break;
}

export { productosDao, carritosDao };
