import ProductoService from "../services/productoServices.js";
import CarritoService from "../services/carritoServices.js";

class ContenedorProductosMongo {
  constructor() {}

  async listarProductos(req, res) {
    let products = await ProductoService.listarProductos();
    //res.render("pages/products", { products });
    res.send(products);
  }

  async insertarProductos(req, res) {
    try {
      const {
        params: { id_cart, id_prod },
      } = req;
      const product = await ProductoService.listarProductoPorId(id_prod);
      const cart = await CarritoService.listarCarritoId(id_cart);
    } catch (error) {
      console.log(error.message);
    }
  }

  async borrarProductoPorId(id, idProd) {
    try {
      let list = [];
      let newList = [];

      const result = await ProductoService.borrarProductoPorId(id, idProd)
      const dataObj = await this.getById(id);
      list.push(...dataObj.productos);
      for (let i = 0; i <= list.length - 1; i++) {
        if (list[i]._id.toString() != idProd) {
          newList.push(list[i]);
        }
      }
      return this._table.findByIdAndUpdate(id, { productos: newList });
    } catch (error) {
      console.log(error.message);
    }
  }

  async actualizarProductoId(id, params) {
    try {
      return this._table.findByIdAndUpdate(id, { params });
    } catch (error) {
      console.log(error.message);
    }
  }

  async borrarProductoPorId(id) {
    try {
      return this._table.findByIdAndDelete({ _id: id });
    } catch (error) {
      console.log(error.message);
    }
  }
}
  
export default ContenedorProductosMongo;
  