import pino from "pino";
import { pinoHttp } from "pino-http";
import env from "../config/index";

export const logger = pino({
    level: env.LOG_LEVEL,
});

export const httpLogger = pinoHttp({
    logger,
    customLogLevel(_req, res) {
        if (res.statusCode >= 500) return "error";
        if (res.statusCode >= 400) return "warn";
        return "info";
    },
});