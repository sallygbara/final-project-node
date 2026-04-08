import dotenv from "dotenv";

dotenv.config();

const env = {
    MONGO_URI: process.env.MONGO_URI,
    LOG_LEVEL: process.env.LOG_LEVEL || "info",
    JWT_SECRET: process.env.JWT_SECRET || "secret",
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5174",
};

export default env;