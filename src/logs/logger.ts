import pino from "pino";
import { pinoHttp } from "pino-http";
import env from "../config";

export const logger = pino({
  level: env.LOG_LEVEL,
});

export const httpLogger = pinoHttp({
  logger,
  customLogLevel: function (_req, res, _err) {
    if (res.statusCode >= 500) {
      return "error";
    }

    if (res.statusCode >= 400) {
      return "warn";
    }

    return "info";
  },
});