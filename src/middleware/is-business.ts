import { RequestHandler } from "express";
import { HttpError } from "../error/custom-error";
import { validateToken } from "./validate-token";

const isBusinessHandler: RequestHandler = (req, res, next) => {
    const isBusiness = req.user?.isBusiness || req.user?.isAdmin;

    if (!isBusiness) {
        throw new HttpError("Must be a business owner or admin", 401);
    }

    next();
};

export const isBusiness = [validateToken, isBusinessHandler];