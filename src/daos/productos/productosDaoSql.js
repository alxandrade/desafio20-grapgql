import Manager from "../../controllers/contenedorProductosSql.js";
import { configMysql } from "../../config/configDB.js";

export class ProductosDaoSql extends Manager {
  constructor(table) {
    super(configMysql,"productos");
  }
}
