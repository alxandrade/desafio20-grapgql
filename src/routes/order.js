import { Router } from "express";
import { carritosDao, ordenesDao } from "../daos/index.js";
import { auth } from "../middleware/middlewares.js";
import { orderEmail } from "../utils/nodemailer.js";

const orderDao = new ordenesDao();
const carritoDao = new carritosDao();
const orderRouter = Router();


// Traer Orden por Id
orderRouter.get('/:id', auth, async (req,res)=>{
  try {
    const order = await orderDao.traerOrdenbyId(req.params.id);        
    res.render("pages/checkout", { order });
  } catch (error) {
    console.log(error);
  }
})

orderRouter.post('/:idCart', auth, async (req,res)=>{
  try {    
    const products = await carritoDao.listarProductosDelCarrito(req.params.idCart);    
    const order = await orderDao.generarOrdenCompra(req, products);    
    //await carritoDao.borrarCarritoPorId(req.params.idCart);
    if (order) {
      orderEmail(req.user, order);        
    }
    res.redirect(`/api/order/${order._id}`);
  } catch (error) {
    console.log(error);
  }
})


export default orderRouter;
