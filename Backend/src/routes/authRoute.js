import express from "express";
import { login, signup } from "../controller/AuthController.js";


const authRouter = express.Router();
authRouter.route("/login").post(login);
// authRouter.route("/signup").post(signup); 

export default authRouter;
