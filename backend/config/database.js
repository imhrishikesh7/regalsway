import mongoose from "mongoose";

export const connectDB = async() => {
    try{
    const {connection} = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    });
    console.log(`Mongo DB is Connected with ${connection.host}`);
    }catch (error) {
        console.error("Mongo DB connection error:", error);
        // You can handle the error further, such as logging or terminating the application.
      }
};
