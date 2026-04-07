import { z } from "zod/v4";
import { addressSchema } from "./address-schema.js";
import { nameSchema } from "./name-schema.js";
import { passwordRegex, phoneRegex } from "./patterns.js";
import { imageSchema } from "./image-schema.js";

export const userSchema = z.strictObject({
    address: addressSchema,
    email: z.string().email().min(5).max(255),
    name: nameSchema,
    password: z.string().min(5).max(30).regex(passwordRegex),
    phone: z.string().min(1).max(50).regex(phoneRegex),
    image: imageSchema,
    isBusiness: z.boolean(),
});

export type User = z.infer<typeof userSchema>;
