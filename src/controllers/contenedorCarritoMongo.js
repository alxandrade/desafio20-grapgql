import ProductoService from "../services/productoServices.js";
import CarritoService from "../services/carritoServices.js";

class CarritoController {
  constructor() {}

  async listarCarritos(req, res) {
    const products = await CarritoService.listarProductosDelCarrito(req.user.cart_id);
    res.render("pages/cart", { products, idCart: req.user.cart_id });
  }

  async listarCarritoId(id) {
    try {
      return await this._table.findById({ _id: id });
    } catch (error) {
      console.log(error.message);
    }
  }

  async agregarProductos(req, res) {
    try {
      const {
        params: { id_cart, id_prod },
      } = req;
      const product = await ProductoService.listarProductoPorId(id_prod);
      await CarritoService.agregarProductos(id_cart, product);
      res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteProducto(req, res) {
    try {
      const {
        params: { id_cart, id_prod },
      } = req;
      await CarritoService.deleteProducto(id_cart, id_prod);
      res.send("Borrar");
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new CarritoController();
