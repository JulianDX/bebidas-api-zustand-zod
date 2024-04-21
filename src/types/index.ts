import { z } from "zod";
import {
  categoriesSchema,
  drinkSchema,
  drinksSchema,
  searchDrinkSchema,
} from "../utils/recipe-schema";

export type Category = z.infer<typeof categoriesSchema>;
export type SearchDrink = z.infer<typeof searchDrinkSchema>;
export type Drink = z.infer<typeof drinkSchema>;
export type DrinkArray = z.infer<typeof drinksSchema>;
