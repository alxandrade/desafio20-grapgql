import { Router } from "express";
import passport from "passport";
import {userSchema} from "../../models/modeloUser.js";
import { createHash, isValid } from "../../utils/bcrypt.js";
import { msgFlash } from "../../middleware/middlewares.js";
import { addLogger } from "../../middleware/logger.js";
import uploader from "../../middleware/multer.middleware.js"
import { loadEmail } from "../../utils/nodemailer.js";

const userRouter = Router();

userRouter.get('/login', addLogger, msgFlash,(req,res)=>{
    res.render('pages/login');
})

userRouter.get('/register', addLogger, msgFlash,(req,res)=>{
    res.render('pages/register');
})

userRouter.post('/register', uploader.single('file'), addLogger, async (req,res)=>{
    try{
                        
        const file = req.file;
        if(!file) return res.status(500).send({status:"error",error:"Error al cargar el archivo"});
        const {first_name,last_name,email,password} = req.body;                
        if(!first_name||!email||!password) return res.status(400).send({status:"error",error:"Valores incompletos"});
        const exists  = await userSchema.findOne({email});
        if(exists) return res.status(400).send({status:"error",error:"El usuario ya existe"});
        const hashedPassword = await createHash(password);
        
        const newUser = {
            first_name,
            last_name,
            email,
            password: hashedPassword,
            avatar: `${req.protocol}://${req.hostname}:${process.env.PORT}/img/${file.filename}`,
        }
        const result = await userSchema.create(newUser);
        if (result) loadEmail(newUser)
        //res.send({status:"success",payload:result})
        res.render("pages/login");
    } catch (error) {
        console.log(error)
        res.status(500).send({status:"error",error:"Error del servidor"})
    }
})

userRouter.post('/login',
    passport.authenticate('login', {
        failureRedirect:'/api/auth/loginFail',
        failureMessage:true
    }), addLogger, 
    
    async (req,res)=>{
        const user = req.user; 
        req.session.user = {
            id: user._id,
            email:user.email,
            role:user.role
        }
   // res.send({status:"success",message:"Logueado :)"})
    res.redirect("/")
})

userRouter.get('/loginFail',addLogger,(req,res)=>{
    console.log(req.session.messages);
    //if(req.session.messages.length>4) return res.status(400).send({message:"Bloquear Usuario"})
    res.status(400).send({status:"error",error:"Error de autenticación"})
})

userRouter.get("/logout", addLogger, (req, res) => {    
    req.logout((error) => {
        if (error) return res.send({message: "Error al Logout"});
        req.flash("success", "Cerraste Sesion con Exito");
        req.session.destroy();
        res.redirect("/");
    });
});

userRouter.get('/current', addLogger, (req,res)=>{
    console.log(req.session);
    res.send(req.session.user);
})

export default userRouter;