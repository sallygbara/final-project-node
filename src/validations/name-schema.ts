import { z } from "zod/v4";

export const nameSchema = z.object({
    first: z.string().min(1).max(100),
    last: z.string().min(1).max(100),
    middle: z.string().max(100).nullish().or(z.literal("")),
});

export type Name = z.infer<typeof nameSchema>;
