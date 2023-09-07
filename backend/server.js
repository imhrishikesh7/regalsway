import Razorpay from "razorpay";
import { app } from "./app.js";
import { connectDB } from "./config/database.js";

connectDB(); 

if (!process.env.RAZORPAY_API_KEY || !process.env.RAZORPAY_API_SECRET) {
  console.error("Razorpay API key and/or secret not defined in environment variables.");
  process.exit(1); // Exit the application with an error code.
}
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.listen(process.env.PORT, () => 
    console.log(`Server is working on ${process.env.PORT}`)
    );
