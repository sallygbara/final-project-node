import "express";
import { DBUser } from "../database/schema";

declare global {
    namespace Express {
        interface Request {
            user?: DBUser;
        }
    }
}
