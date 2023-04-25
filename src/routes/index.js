import { Router } from "express";
import productoRoutes from "./producto.routes.js";
import carritoRoutes from "./carrito.routes.js";

const apiRouter = Router();

apiRouter.use("/productos", productoRoutes);
apiRouter.use("/carritos", carritoRoutes);

export default apiRouter;
