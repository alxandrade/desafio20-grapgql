import Manager from "../../controllers/contenedorOrden.js";
import { orderSchema } from "../../models/modeloOrden.js";


export class OrdenesDaoMongo extends Manager {
  constructor() {
    super(orderSchema);
  }
}
