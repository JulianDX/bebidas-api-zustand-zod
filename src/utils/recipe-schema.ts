import { z } from "zod";

export const categoriesSchema = z.array(
  z.object({
    strCategory: z.string(),
  })
);

export const searchDrinkSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});

export const drinkSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

export const drinksSchema = z.array(drinkSchema);
