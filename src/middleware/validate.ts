import { RequestHandler } from "express";
import { ZodType } from "zod/v4";
import { cardSchema, userSchema, loginSchema } from "../validations";

export function validateSchema<T>(
    schema: ZodType<T>,
): RequestHandler<any, any, T> {
    return async (req, res, next) => {
        req.body = await schema.parseAsync(req.body);
        next();
    };
}

export const validateUser: RequestHandler = validateSchema(userSchema);
export const validateCard: RequestHandler = validateSchema(cardSchema);
export const validateLogin: RequestHandler = validateSchema(loginSchema);

//
export const validateUserUpdate: RequestHandler = validateSchema(userSchema.partial());
export const validateCardUpdate: RequestHandler = validateSchema(cardSchema.partial());