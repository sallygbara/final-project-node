import { z } from "zod";
import { addressSchema } from "./address-schema.js";
import { imageSchema } from "./image-schema.js";
import { phoneRegex } from "./patterns.js";

export const cardSchema = z.object({
    title: z.string().min(1).max(100),
    subtitle: z.string().min(1).max(100),
    description: z.string().min(1).max(500),
    phone: z.string().min(1).max(50).regex(phoneRegex),
    email: z.string().email().min(5).max(255),
    web: z.string().url().min(5).max(255),
    address: addressSchema,
    image: imageSchema,
});

export type Card = z.infer<typeof cardSchema>;