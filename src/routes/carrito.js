import { Router } from "express";
import { auth } from "../middleware/middlewares.js";
import CarritoController from '../controllers/contenedorCarritoMongo.js'

const carritosRouter = Router();
const controllerCarrito = new CarritoController();

/*const router = Router();
import { options } from "../config/configDB.js";
import ContenedorCarritos from "../contenedores/sql/contenedorCarritos.js";
const sqlCarrito = new ContenedorCarritos(options.mysql);*/

// Variable para manejar el acceso; TRUE es Admin; FALSE no acceso
const admin = true;

// Traer TODOS los Carritos
carritosRouter.get("/", async (req, res) => {
  if (admin) {
    let carritos = await carritoDao.listarCarritos();
    let mensaje = null;
    let accion = "TodosLosCarritos";
    
export default carritosRouter;