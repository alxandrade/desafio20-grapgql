import Manager from "../../controllers/contenedorProductosMongo.js";
import { productosSchema } from "../../models/modeloProductos.js";

export class ProductosDaoMongo extends Manager {
  constructor() {
    super(productosSchema);
  }
}
