import { Router } from "express";
import { auth } from "../middleware/middlewares.js";
import ContenedorProductosMongo from '../controllers/contenedorProductosMongo.js'

const productosRouter = Router();
//const sqlProducto = new ContenedorProductos(options.mysql);

// Traer los datos de todos los producto
productosRouter.get("/", async (req, res, next) => {
  try {
    let accion = "listaProductos";
    const productos = await productoDao.listarProductos();
    //.render("index.ejs", { productos, accion })
    productos
      ? res.status(200).send(productos)
      //? res.render("pages/products")
      : res.status(404).json({ message: "No hay productos disponibles" });
  } catch (error) {
    console.log(error);
  }
});

//Traer los datos de todos los producto cuando se dara de alta
productosRouter.get("/alta", async (req, res, next) => {
  try {
    const productos = await productoDao.listarProductos();
    let accion = "altaProductos";
    //.render("index.ejs", { productos, accion })
    productos
      ? res.status(200).send(productos)
      : res.status(404).json({ message: "No hay productos disponibles" });    
  } catch (error) {
    console.log(error);
  }
});

// Traer los datos de un producto de un ID
productosRouter.get("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let accion = "detalleProducto";
    let productos = await productoDao.listarProductoPorId(id);    
    if (productos.length > 0) {
      res.status(200).json(productos);
      //res.status(200).render("index.ejs", { productos, accion });
    } else {
      res.status(400).json({ error: `Producto No Encontrado con ID: ${id}` });
    }
  } catch (error) {
    console.log(error);
  }
});

// Agregar nuevo producto al archivo (BD)
productosRouter.post ("/", async (req, res, next) =>{
    try{
        let {codigo, descripcion, precio, stock, foto} = req.body
        if(!codigo||!descripcion||!foto||!precio||!stock){
            console.log("Faltan datos");
        } else {                                        
            let obj = req.body;                        
            productoDao.insertarProductos(obj);
            res.redirect('/api/productos');
        }
    } catch(error){
        console.log(error);
    }
});

// Modificar los datos de un ID (Probar por PostMan)
productosRouter.put("/:id", async (req, res, next) => {
    try{
        let {codigo, descripcion, precio, stock, foto} = req.body;
        if(!codigo||!descripcion||!foto||!precio||!stock){            
            res.status(400).json("Faltan datos");
        } else {
            let id = req.params.id;
            let nuevosDatos = req.body;
            const productoAcualizado = await productoDao.actualizarProductoId(id, nuevosDatos);
            if(!productoAcualizado){
                res.status(200).send("Producto actualizado");
            } else {
                res.status(400).json({ error: `Producto No Encontrado con ID: ${id}` });
            }
        };        
        //res.redirect("/api/productos");
    } catch(error){
        console.log(error);
    }    
});

// Borrar los datos de un ID (Probar por Postman)
productosRouter.delete ("/:id", async (req, res, next) =>{
    try{
        let id = req.params.id;
        const fueBorrado = await productoDao.borrarProductoPorId(id);        
        fueBorrado
        ? res.status(200).json({ message: "Producto borrado con éxito", id: req.params.id })
        : res.status(404).json({ message: "Producto no encontrado: id "  + req.params.id });                  
        let accion = 'listaProductos';  
        //res.render('index.ejs', {productos, accion})
    } catch (error){
        console.log(error);
    }
});



export default productosRouter;
