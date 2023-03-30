import { Router } from "express";
import { auth } from "../middleware/middlewares.js";
import { addLogger } from "../middleware/logger.js";

const profileRouter = Router();

profileRouter.get("/", addLogger, auth, (req, res) => {   
    console.log(req.user);
    const { first_name, last_name, email, avatar } = req.user;
    const user = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        avatar: avatar,    
    };
    res.render("pages/profile", { profile: user });
});

export default profileRouter;
