import { Router } from "express";
import { auth } from "../middleware/middlewares.js";
import ContenedorOrden from '../controllers/contenedorOrden.js'

const orderRouter = Router();

orderRouter
  .get('/:id', auth, ContenedorOrden.traerOrdenbyId)
  .post('/:idCart', auth, ContenedorOrden.generarOrdenCompra)
  
export default orderRouter;
