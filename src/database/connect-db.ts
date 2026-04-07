import mongoose from "mongoose";
import initDB from "./init-db";
import env from "../config";
import { logger } from "../logs/logger";

const connectDB = async (
    connectionString: string = env.DB_CONNECTION_STRING,
) => {
    try {
        await mongoose.connect(connectionString);
        logger.info("Connected to MongoDB!");

        await initDB();
    } catch (error) {
        logger.error("Failed to connect to MongoDB: ", error as undefined);
        process.exit(1);
    }
};

export default connectDB;













