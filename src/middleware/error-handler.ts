import { ErrorRequestHandler } from "express";
import { MongoServerError } from "mongodb";
import env from "../config";
import { ZodError } from "zod/v4";

const ValidationErrorNames = [
    "JOSEError",
    "JWKInvalid",
    "JWEInvalid",
    //... and more and more
];

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    req.log.error(err);
    res.err = err;

    if (err.name && ValidationErrorNames.includes(err.name)) {
        return res.status(400);
    }

    if (err instanceof SyntaxError) {
        return res.status(400).json({
            error: err.name,
            messgae: "Invalid JSON Format",
            description: err.message,
        });
    }

    if (err instanceof ZodError) {
        return res.status(400).json({
            messgae: "Validation Error",
            issues: err.issues,
        });
    }

    if (err instanceof MongoServerError) {
        return res.status(400).json({
            message: err.errmsg,
            code: err.errorResponse?.code ?? "no-code",
            name: err.name,
            stack: env.LOG_LEVEL === "debug" ? err.stack : undefined,
        });
    }

    const status =
        err.statusCode ||
        err.status ||
        (res.statusCode >= 400 ? res.statusCode : 500);

    res
        .status(status)
        .json({ message: err.message ?? "internal server error", err });
};
