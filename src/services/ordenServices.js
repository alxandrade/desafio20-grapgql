import { OrderPersist } from "../persistence/index.persistence.js";
import CarritoService from "./carritoServices.js";

const orderPersist = new OrderPersist();

class OrdenService {
  constructor() {}

  async generarOrdenCompra(user, IdCart) {
    try {

      const products = await CarritoService.listarProductosDelCarrito(IdCart);
      const total = products.reduce((item, _item) => {
        return item + _item.precio;
      }, 0);
      
      const order = await orderPersist.generarOrdenCompra(user, products, total);
      return order;
    } catch (error) {
        console.log(error);
    }
  }

  async traerOrdenbyId(id_order) {
    try {
      const order = await orderPersist.traerOrdenbyId(id_order);
      return order;
    } catch (error) {
        console.log(error);
    }
  }
}

export default new OrdenService();