import ProductoPersistence from "./productos.persistence.js";
import { productosSchema } from "../models/modeloProductos.js";

import CarritoPersistence from "./carrito.persistence.js";
import { carritosSchema } from "../models/modeloCarritos.js";

/*import OrdenPersistence from "./orden.persistence.js";
import { orderSchema } from "../models/modeloOrden.js";*/

export class ProductPersist extends ProductoPersistence {
  constructor() {
    super(productosSchema);
  }
}

export class CartPersist extends CarritoPersistence {
  constructor() {
    super(carritosSchema);
  }
}

/*export class OrderPersist extends OrdenPersistence {
  constructor() {
    super(orderSchema);
  }
}*/
