import express from "express";
import { checkout, complete, cancel } from "../controller/paymentsController.js";

const paymentsRouter = express.Router();
paymentsRouter.route("/checkout").post(checkout);
paymentsRouter.route("/complete").post(complete);
paymentsRouter.route("/cancel").post(cancel);

export default paymentsRouter;
