import { RequestHandler, Request } from "express";
import { authService } from "../service";
import { User } from "../database/models";
import { HttpError } from "../error/custom-error";

const extractToken = (req: Request) => {
    const authHeader = req.header("Authorization");

    if (
        authHeader &&
        authHeader.length > 7 &&
        authHeader.toLocaleLowerCase().startsWith("bearer ")
    ) {
        return authHeader.substring(7);
    }

    throw new HttpError("Token is missing in Authorization header", 400);
};

const validateToken: RequestHandler = async (req, res, next) => {
    const token = extractToken(req);

    const { email } = await authService.verifyJWT(token);
    const user = await User.findOne({ email });

    if (!user) {
        throw new HttpError("User does not exist!", 401);
    }

    req.user = user;

    next();
};

export { validateToken };