import dotenv from "dotenv";

dotenv.config();

console.log("MONGO_URI =", process.env.MONGO_URI);

const env = {
    MONGO_URI: process.env.MONGO_URI,
    LOG_LEVEL: process.env.LOG_LEVEL || "info",
    JWT_SECRET: process.env.JWT_SECRET || "secret",
};

export default env;