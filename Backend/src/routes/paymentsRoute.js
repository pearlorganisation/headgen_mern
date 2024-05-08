import express from "express";
import { checkout, complete, cancel } from "../controller/paymentsController.js";

const paymentsRouter = express.Router();
paymentsRouter.route("/checkout").post(checkout);
paymentsRouter.route("/complete").get(complete);
paymentsRouter.route("/cancel").get(cancel);

export default paymentsRouter;
