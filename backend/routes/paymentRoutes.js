import express from "express";
import { checkout, paymentVerification } from "../controllers/paymentController.js";
const router = express.Router();


router.get('/getKey', (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});

router.route("/checkout")
.post(async (req, res, next) => {
    try {
      await checkout(req, res);
    } catch (error) {
      next(error); // Pass the error to the next middleware
    }
  });


router.route("/paymentverification")
.post(async (req, res, next) => {
    try {
      await paymentVerification(req, res);
    } catch (error) {
      next(error); // Pass the error to the next middleware
    }
  });


export default router;
