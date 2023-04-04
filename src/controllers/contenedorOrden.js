import OrdenService from "../services/ordenServices.js";
import CarritoService from "../services/carritoServices.js";
import { orderEmail } from "../utils/nodemailer.js";


class ContenedorOrden {
  constructor() {}

  async generarOrdenCompra(req, res) {
    try {
      const order = await OrdenService.generarOrdenCompra(req);
      await CarritoService.borrarCarritoPorId(req.user.cart_id);
      if (order) {
        orderEmail(req.user, order);        
      }
      res.redirect(`/api/order/${order._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  async traerOrdenbyId(req, res) {
    try {
      const order = await OrdenService.traerOrdenbyId(req.params.id);
      res.render("pages/checkout", { order });
    } catch (error) {
      console.log(error.message);
    }
  }
}


export default new ContenedorOrden();
