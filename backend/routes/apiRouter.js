import express from "express";
import paymentRoute from "./paymentRoutes.js";

const apiRouter = express.Router();

apiRouter.use("/payment", paymentRoute);
app.get("/payment/getKey", (req, res) =>{
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY})
})

export default apiRouter;
