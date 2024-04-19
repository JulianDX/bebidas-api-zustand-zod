import { z } from "zod";
import { categoriesSchema } from "../utils/recipe-schema";

export type Category = z.infer<typeof categoriesSchema>;
