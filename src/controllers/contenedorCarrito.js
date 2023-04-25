import { cartService } from "../services/index.service.js";
import { productService } from "../services/index.service.js";

const getById = async (req, res) => {  
  let products = await cartService.getById(req.user.cart_id);
  res.render("pages/cart", { products: { ...products }, idCart: req.user.cart_id });
};
const create = async (req, res) => {};
const addProductCart = async (req, res) => {
  try {
    const {
      params: { id_cart, id_prod },
    } = req;
    
    const product = await productService.getById(id_prod);
    await cartService.saveProductInCart(id_cart, product);
    res.status(200);
  } catch (error) {
    loggerApp.error(error);
  }
};
const deleteProductCart = async (req, res) => {
  try {
    const {
      params: { id_cart, id_prod },
    } = req;
    await cartService.deleteProductInCart(id_cart, id_prod);
  } catch (error) {
    loggerApp.error(error);
  }
};
const deleteAllProdToCart = async (req, res) => {
  try {
    await cartService.deleteAllProdToCart(req.user.cart_id);
    res.send("Todo borrado");
  } catch (error) {
    loggerApp.error(error);
  }
};
const updateById = (req, res) => {};

export default { getById, create, deleteAllProdToCart, updateById, addProductCart, deleteProductCart };
