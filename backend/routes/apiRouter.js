import express from "express";
import paymentRoute from "./paymentRoutes.js";

const apiRouter = express.Router();

apiRouter.use("https://regalsway.onrender.com", paymentRoute);

export default apiRouter;
