import { Router } from "express";
import { carritosDao } from "../daos/index.js";
import { productosDao } from "../daos/index.js";

const carritoDao = new carritosDao();
const productoDao = new productosDao();
const carritosRouter = Router();

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
    
    carritos
      ? res.status(200).json(carritos)
      : res.status(404).json({ message: "No hay productos disponibles" });
    //res.render("carrito.ejs", { carrito, accion, mensaje });
    res.status()
  } else {
    const carrito = null;
    let accion = "SinAccesoCarrito";
    const mensaje = "No tiene permisos para acceder a esta sección";
    res.render("index.ejs", { carrito, accion, mensaje });
  }
});

// Traer los datos de un Carrito de un ID
carritosRouter.get ("/:id", async (req, res, next) =>{    
    try {
        let id = req.params.id;
        let accion = 'detalleCarrito';              
        const mensaje = "";
        const carrito = await carritoDao.listarCarritoId(id);
        carrito
            ? res.status(200).json(carrito)
            : res.status(404).json({ message: "No existe el Carrito con el Id " + id});              
    } catch (error) {
        console.log(error);
    }
});

// Traer los productos de un Carrito de un ID
carritosRouter.get ("/productos/:id", async (req, res, next) =>{    
    try {
        let id = parseInt(req.params.id);          
        let accion = 'detalleCarrito';              
        const mensaje = "";
        const carrito = await carritoDao.listarProductosDelCarrito(id);
        carrito
            ? res.status(200).json(carrito)
            : res.status(404).json({ message: "No existe el Carrito con el Id " + id});              
    } catch (error) {
        console.log(error);
    }
});

// Agregar nuevo Carrito
carritosRouter.post ("/", async (req, res, next) =>{
    try {                                       
        let obj = req.body;
        const IdCarrito = await carritoDao.crearCarrito(obj);
        const carrito = await carritoDao.listarCarritoId(IdCarrito);
        carrito
            ? res.status(200).json(carrito)
            : res.status(404).json({ message: "No se puede crear el Carrito " + id});
    } catch (error) {
        console.log(error);
    }
});

// Borrar los datos de un carrito por su ID
carritosRouter.delete ("/:id", async (req, res, next) =>{
    try{
        let id = parseInt(req.params.id);
        const fueBorrado = await carritoDao.borrarCarritoPorId(id);
        fueBorrado
        ? res.status(200).json({ message: "Carrito borrado con éxito", id: req.params.id })
        : res.status(404).json({ message: "Carrito no encontrado: id "  + req.params.id });                  
        let accion = 'borrarCarritoId';  
        //res.render('index.ejs', {productos, accion})
    } catch{
        console.log(error);
    }
});

export default carritosRouter;
