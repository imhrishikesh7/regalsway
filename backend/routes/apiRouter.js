import express from "express";
import paymentRoute from "./routes/paymentRoutes.js";

const apiRouter = express.Router();

apiRouter.use("https://regalsway.onrender.com", paymentRoute);

export default apiRouter;
