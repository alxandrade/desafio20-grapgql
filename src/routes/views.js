import { Router } from "express";
import { auth } from "../middleware/middlewares.js";

const viewsRouter = Router();

viewsRouter.get("/", auth, async (req, res) => {
    res.render("pages/home", { userLogin: req.user.username });
});



export default viewsRouter;