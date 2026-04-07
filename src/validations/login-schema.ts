import { userSchema } from "./user-schema.js";

export const loginSchema = userSchema.pick({
    email: true,
    password: true,
});
