import { Router } from "express";
import { auth } from "../middleware/middlewares.js";
import ContenedorProductosMongo from '../controllers/contenedorProductosMongo.js'

const productosRouter = Router();

productosRouter.get("/", async (req, res) => {
  res.render("pages/products");
});

  // .get("/", auth, ContenedorProductosMongo.listarProductos)
  // .get("/alta", auth, ContenedorProductosMongo.listarProductos)
  // .get("/:id", auth, ContenedorProductosMongo.listarProductoPorId)
  // .post ("/", auth, ContenedorProductosMongo.insertarProductos)
  // .put("/:id", auth, ContenedorProductosMongo.actualizarProductoId)
  // .delete ("/:id", auth, ContenedorProductosMongo.borrarProductoPorId)    

export default productosRouter;
