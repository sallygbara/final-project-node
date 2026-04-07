import corsMiddlware, { CorsOptions } from "cors";
import { HttpError } from "../error/custom-error";

const allowedOrigins = [
    "https://exmple.com",
    "https://admin.exmple.com",
    "http://localhost:3000",
    "http://localhost:5173",
];

const allowedHeaders = [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
];

export const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        // !origin means like postman which dont have any origin
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new HttpError("Blocked by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: allowedHeaders,
    credentials: true,
};

export const cors = corsMiddlware(corsOptions);
