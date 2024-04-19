import { StateCreator } from "zustand";
import { getCategoriesFromAPI } from "../services/RecipeServices";
import { Category } from "../types";

export type RecipeSliceType = {
  categories: Category;
  getCategories: () => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: [],
  getCategories: async () => {
    const petition = await getCategoriesFromAPI();
    if (petition?.success) {
      set(() => ({
        categories: petition.data,
      }));
    }
  },
});
