import axios from "axios";
import {
  categoriesSchema,
  drinksSchema,
  RecipeAPIResponseSchema,
} from "../utils/recipe-schema";
import { Drink, SearchDrink } from "../types";

export const getCategoriesFromAPI = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  try {
    const {
      data: { drinks },
    } = await axios(url);
    return categoriesSchema.safeParse(drinks);
  } catch (error) {
    console.log(error);
  }
};

export const getDrinksFromAPI = async (search: SearchDrink) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.ingredient}`;
    const petition = await axios(url);
    const {
      data: { drinks },
    } = petition;
    return drinksSchema.safeParse(drinks);
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeFromAPI = async (id: Drink["idDrink"]) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const petition = await axios(url);
  const {
    data: { drinks },
  } = petition;
  return RecipeAPIResponseSchema.safeParse(drinks[0]);
};
