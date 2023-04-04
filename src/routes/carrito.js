import { Router } from "express";
import { auth } from "../middleware/middlewares.js";
import CarritoController from '../controllers/contenedorCarritoMongo.js'

const carritosRouter = Router();

carritosRouter
    .get("/", auth, CarritoController.listarCarritos)
    .get("/:id", auth, CarritoController.listarCarritoId)
    //.get ("/productos/:id", auth, CarritoController.listarProductosDelCarrito)
    //.post ("/", auth, CarritoController.crearCarrito)
    .put ("/:id", auth, CarritoController.agregarProductos)
    //.delete ("/:id", auth, CarritoController.borrarCarritoPorId)
    .post ("/:id_cart/producto/:id_prod/delete", auth, CarritoController.deleteProducto)
    
export default carritosRouter;
