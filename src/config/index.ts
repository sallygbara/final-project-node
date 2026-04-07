const env = {
    LOG_LEVEL: process.env.LOG_LEVEL || "info",
    PORT: process.env.PORT || 3000,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING || "",
    JWT_SECRET: process.env.JWT_SECRET || "",
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5174",
};

export default env;