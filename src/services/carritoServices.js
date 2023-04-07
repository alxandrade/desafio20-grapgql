import { CartPersist } from "../persistence/index.persistence.js";

const cartPersist = new CartPersist();

class CarritoService {
  constructor() {}

  async listarCarritoId(id_cart) {
    let result = await cartPersist.listarCarritoId(id_cart);
    return result;
  }

  async agregarProductos(id_cart, product) {
    try {
      const result = await cartPersist.agregarProductos(id_cart, product);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  
  async deleteProducto(id_cart, id_prod) {
    try {
      const result = await cartPersist.deleteProducto(id_cart, id_prod);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async borrarCarritoPorId(id_cart) {
    try {
      await cartPersist.borrarCarritoPorId(id_cart);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  async listarProductosDelCarrito(id) {
    try {
      const data = await cartPersist.listarProductosDelCarrito(id);      
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CarritoService();