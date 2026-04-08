import mongoose from "mongoose";
import env from "../config";

const connectDB = async () => {
    try {
        await mongoose.connect(env.DB_CONNECTION_STRING);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
};

export default connectDB;











