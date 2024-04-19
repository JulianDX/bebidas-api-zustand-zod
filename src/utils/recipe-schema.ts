import { z } from "zod";

export const categoriesSchema = z.array(
  z.object({
    strCategory: z.string(),
  })
);
