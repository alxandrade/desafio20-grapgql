import OrdenService from "../services/ordenServices.js";
import { orderEmail } from "../utils/nodemailer.js";

class ContenedorOrden {
  constructor() {}

  // Generar una Orden de Compra
  async generarOrdenCompra(req, res) {
    try {

      const {
        params: { idCart },
      } = req;

      const orden = await OrdenService.generarOrdenCompra(req, idCart);
            
      if (orden) {
        orderEmail(req.user, orden);        
      }
      
      res.redirect(`/api/order/${orden._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  // Traer una Orden de Compra por su Id
  async traerOrdenbyId(req, res) {
    try {
      const {
        params: { id },
      } = req;
      const order = await OrdenService.traerOrdenbyId(id)
      res.render("pages/checkout", { order });
    } catch (error) {
      console.log(error);
    }
  }  
}

export default ContenedorOrden;