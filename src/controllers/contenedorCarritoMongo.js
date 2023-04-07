/*import ProductoService from "../services/productoServices.js";*/
import CarritoService from "../services/carritoServices.js";

class CarritoController {
  constructor() {}

  async listarCarritos(req, res) {
    const products = await CarritoService.listarProductosDelCarrito(req.user.cart_id);
    res.render("pages/cart", { products, idCart: req.user.cart_id });
  }

  async listarCarritoId(req, res) {
    try {
      const {
        params: { id }
      } = req;
      const carritos = await CarritoService.listarCarritoId(id);
      res.status(200).send(carritos);
    } catch (error) {
      console.log(error.message);
    }
  }

  async listarProductosDelCarrito(req, res) {
    try {
      const {
        params: { id }
      } = req;    
      const products = await CarritoService.listarProductosDelCarrito(id);
      res.render('pages/cart', { products, id })      
    } catch (error) {
      return {
        status: "error",
        mensaje: "No existe el carrito con ese ID o es un formato invalido",
      };
    }
  }
  
  async agregarProductos(req, res) {
    try {
      const {
        params: { id_cart, id_prod },
      } = req;
      //const product = await ProductoService.listarProductoPorId(id_prod);
      const product = []
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

export default CarritoController;