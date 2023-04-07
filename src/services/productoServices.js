import { ProductPersist } from "../persistence/index.persistence.js";

const productPersist = new ProductPersist();

class ProductoService {
  constructor() {}

  async listarProductos() {
    let products = await productPersist.listarProductos();
    return products;
  }

  async listarProductoPorId(id_prod) {
    try {
      let product = await productPersist.listarProductoPorId(id_prod);
      console.log("Servicios");
      return product;
    } catch (error) {
        console.log(error.message);
    }
  }
}

export default new ProductoService();