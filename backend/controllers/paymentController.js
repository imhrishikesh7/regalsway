import { instance } from "../server.js";
import crypto from "crypto";
// import { Payment } from "../models/paymentModel.js"

export const checkout = async (req, res) => {
try {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  res.status(200).json({
    success: true,
    order,
  }); 
}
 catch (error) {
  console.error("Checkout error:", error);
  res.status(500).json({
    success: false,
    error: "Error creating Razorpay order",
  });
}
};

export const paymentVerification = async (req, res) => {
  try{
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  let body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  
    const redirectURL = `https://regalswayfront.onrender.com/paymentsuccess?reference=${razorpay_payment_id}`;
    //Modify this url wrto the actal frontend domain name.

  const isAuthentic = expectedSignature === razorpay_signature;
  if(isAuthentic){
    //Database comes here
    // await Payment.create({
    //   razorpay_order_id,
    //   razorpay_payment_id,
    //   razorpay_signature,
    // });
    res.redirect(redirectURL);

  }
  else{
    res.status(400).json({
      success: false,
      error: "Payment verification failed",
    });
  }
 }
 catch (error) {
  console.error("Payment verification error:", error);
  res.status(500).json({
    success: false,
    error: "Error verifying payment",
  });
}
};
