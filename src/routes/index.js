import { Router } from "express";
import productoRoutes from "../routes/producto.js";
import carritoRoutes from "../routes/carrito.js";

const apiRouter = Router();

apiRouter.use("/productos", productoRoutes);
apiRouter.use("/carritos", carritoRoutes);

export default apiRouter;
