import { Router } from "express";
import { auth } from "../middleware/middlewares.js";

const indexRouter = Router();

indexRouter.get("/", auth, async (req, res) => {
    res.render("pages/home", { userLogin: req.user.email });
});

export default indexRouter;
