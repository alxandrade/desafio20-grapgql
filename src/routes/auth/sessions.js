import { Router } from "express";
import passport from "passport";
import {userSchema} from "../../models/modeloUser.js";
import { createHash, isValid } from "../../utils/bcrypt.js";
import { msgFlash } from "../../middleware/middlewares.js";
const userRouter = Router();


userRouter.get('/login', msgFlash,(req,res)=>{
    res.render('pages/login');
})

userRouter.get('/register',msgFlash,(req,res)=>{
    res.render('pages/register');
})

userRouter.post('/register',async (req,res)=>{
    const {first_name,last_name,email,password} = req.body;
    if(!first_name||!email||!password) return res.status(400).send({status:"error",error:"Valores incompletos"});
    const exists  = await userSchema.findOne({email});
    if(exists) return res.status(400).send({status:"error",error:"El usuario ya existe"});
    const hashedPassword = await createHash(password);
        
    const result = await userSchema.create({
        first_name,
        last_name,
        email,
        password: hashedPassword
    })
    //res.send({status:"success",payload:result})
    res.render("pages/login");
})

userRouter.post('/login',
    passport.authenticate('login', {
        failureRedirect:'/api/auth/loginFail',
        failureMessage:true
    }),
    
    async (req,res)=>{
        const user = req.user; 
        req.session.user = {
            id: user._id,
            email:user.email,
            role:user.role
        }
   // res.send({status:"success",message:"Logueado :)"})
    res.render("pages/home", { userLogin: req.session.user.email });
})

userRouter.get('/loginFail',(req,res)=>{
    console.log(req.session.messages);
    //if(req.session.messages.length>4) return res.status(400).send({message:"Bloquear Usuario"})
    res.status(400).send({status:"error",error:"Error de autenticación"})
})

userRouter.get("/logout", (req, res) => {    
    res.render("pages/home", { userLogout: req.session.user.email });
    req.session.destroy();
});

userRouter.get('/current',(req,res)=>{
    console.log(req.session);
    res.send(req.session.user);
})

export default userRouter;