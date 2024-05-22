import express from "express";
import { checkout, complete, cancel } from "../controller/paymentsController.js";
import { upload } from "../utils/multer.js";

const paymentsRouter = express.Router();
paymentsRouter.route("/checkout").post(upload.array("images"),checkout);
paymentsRouter.route("/complete").get(complete);
paymentsRouter.route("/cancel").get(cancel);

export default paymentsRouter;
