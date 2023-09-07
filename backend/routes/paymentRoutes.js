import express from "express";
import { checkout, paymentVerification } from "../controllers/paymentController.js";


const router = express.Router();

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
