import { Router } from "express";
import { auth } from "../middleware/middlewares.js";
import CarritoController from '../controllers/contenedorCarritoMongo.js'

const carritosRouter = Router();
const controllerCarrito = new CarritoController();

carritosRouter
    .get("/", auth, controllerCarrito.listarCarritos)
    .get("/:id", auth, controllerCarrito.listarCarritoId)
    .get ("/productos/:id", auth, controllerCarrito.listarProductosDelCarrito)
    //.post ("/", auth, CarritoController.crearCarrito)
    .put ("/:id", auth, controllerCarrito.agregarProductos)
    //.delete ("/:id", auth, CarritoController.borrarCarritoPorId)
    .post ("/:id_cart/producto/:id_prod/delete", auth, controllerCarrito.deleteProducto)
    
export default carritosRouter;