import { Router } from "express";
import { auth } from "../middleware/middlewares.js";
import productController from '../controllers/contenedorProductos.js'

const productosRouter = Router();

productosRouter
  .get("/", productController.getAll)
  .get("/:id", productController.getById)
  .post ("/", auth, productController.create)
  .put("/:id", auth, productController.updateById)
  .delete ("/:id", auth, productController.deleteById)    
    
export default productosRouter;
