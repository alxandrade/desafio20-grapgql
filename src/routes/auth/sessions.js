import { Router } from "express";
import passport from "passport";
import {userSchema} from "../../models/modeloUser.js";

const userRouter = Router();

userRouter.post('/register',
    /*passport.authenticate("register", {
        failureRedirect: "/api/auth/register",
        successRedirect: "/",
        failureFlash:true,
    }),*/
    async (req,res)=>{
    const {first_name,last_name,email,password} = req.body;
    if(!first_name||!email||!password) return res.status(400).send({status:"error",error:"Valores incompletos"});
    const exists  = await userSchema.findOne({email});
    if(exists) return res.status(400).send({status:"error",error:"El usuario ya existe"});
    const result = await userSchema.create({
        first_name,
        last_name,
        email,
        password
    })
    //res.send({status:"success",payload:result})
    res.render("pages/login");
})

userRouter.post('/login',
    /*passport.authenticate("login", {
        failureRedirect:"/api/auth/login",
        successRedirect: "/",
        failureFlash: true,
    }),*/
    async (req,res)=>{
    const {email,password} = req.body;    
    if(!email||!password) return res.status(400).send({status:"error",error:"Valores incompletos"});
    const user = await userSchema.findOne({email,password});
    if(!user) return res.status(400).send({status:"error",error:"Correo o contraseña inválidos"});
    req.session.user = {
        id: user._id,
        email:user.email,
        role:user.role
    }
    //res.send({status:"success",message:"Logueado :)"})
    res.render("pages/home", { userLogin: req.session.user.email });
})

userRouter.get("/logout", (req, res) => {    
    res.render("pages/home", { userLogout: req.session.user.email });
    req.session.destroy();
  });

export default userRouter;