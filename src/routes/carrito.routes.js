import { Router } from "express";
import { auth } from "../middleware/middlewares.js";
import cartController from '../controllers/contenedorCarrito.js'

const carritosRouter = Router();

carritosRouter
    .get("/", auth, cartController.getById)
    .get("/:id", auth, cartController.getById)
    .post("/:id_cart/productos/:id_prod", auth, cartController.addProductCart)
    .post ("/:id_cart/productos/:id_prod/delete", auth, cartController.deleteProductCart)
        
export default carritosRouter;
