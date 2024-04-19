import axios from "axios";
import { categoriesSchema } from "../utils/recipe-schema";

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
