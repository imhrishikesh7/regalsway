import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import apiRouter from "./routes/apiRouter.js";
import cors from "cors"
config({ path: "./config/process.env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Check for required environment variables
if (!process.env.RAZORPAY_API_KEY) {
    console.error("Razorpay API key not defined in environment variables.");
    process.exit(1); // Exit the application with an error code.
  }

app.get("/", (req, res) => {
  res.send("Welcome to www.regalsway.com server!");
});
app.use("/api", apiRouter); // Use the custom API router
  
// app.use("/api", paymentRoute)
// app.get("/api/getKey", (req, res) =>{
//     res.status(200).json({ key: process.env.RAZORPAY_API_KEY})
// })

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
    next();
  });
  
  
  
  
