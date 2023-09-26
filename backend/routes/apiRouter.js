import express from "express";
import paymentRoute from "./paymentRoutes.js";

const apiRouter = express.Router();

apiRouter.use("/payment", paymentRoute);


export default apiRouter;
