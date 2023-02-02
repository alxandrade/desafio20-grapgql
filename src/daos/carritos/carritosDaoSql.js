import Manager from "../../controllers/contenedorCarritosSql.js";
import { configMysql } from "../../config/configDB.js";

export class CarritosDaoSql extends Manager {
  constructor(table) {
    super(configMysql,"carritos");
  }
}
