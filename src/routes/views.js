import { Router } from "express";
import { msgFlash } from "../middleware/middlewares.js";

const viewsRouter = Router();

viewsRouter.get('/register',msgFlash,(req,res)=>{
    res.render('pages/register');
})

viewsRouter.get('/login', msgFlash,(req,res)=>{
    res.render('pages/login');
})

export default viewsRouter;