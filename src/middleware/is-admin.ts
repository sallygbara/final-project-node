import { RequestHandler } from "express";
import { HttpError } from "../error/custom-error";
import { validateToken } from "./validate-token";

const isAdminHandler: RequestHandler = (req, res, next) => {
    const isAdmin = req.user?.isAdmin;
    if (!isAdmin) {
        throw new HttpError("Must be admin", 401);
    }

    next();
};

export const validateIsAdmin = [validateToken, isAdminHandler];