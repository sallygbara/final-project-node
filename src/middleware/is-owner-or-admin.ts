import { RequestHandler } from "express";
import { HttpError } from "../error/custom-error";
import { validateToken } from "./validate-token";

const isOwnerOrAdminHander: RequestHandler = (req, res, next) => {
    const isAdmin = req.user?.isAdmin;
    if (isAdmin) {
        return next();
    }

    console.log("req.params.id: ", req.params.id);
    console.log("req.user?._id: ", req.user?._id);

    if ((req.user?._id.toString() ?? "") == req.params.id) {
        return next();
    }

    next(new HttpError("Must be the owner or admin", 401));
};

export const isOwnerOrAdmin = [validateToken, isOwnerOrAdminHander];
