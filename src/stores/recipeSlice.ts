import { StateCreator } from "zustand";
import {
  getCategoriesFromAPI,
  getDrinksFromAPI,
} from "../services/RecipeServices";
import { Category, Drink, DrinkArray, SearchDrink } from "../types";

export type RecipeSliceType = {
  categories: Category;
  drinks: DrinkArray;
  modal: boolean;
  getCategories: () => Promise<void>;
  getDrinks: (search: SearchDrink) => Promise<void>;
  openModalAndSetDrink: (id: Drink["idDrink"]) => void;
  closeModal: () => void;
  setActiveDrink: (id: Drink["idDrink"]) => void;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set, get) => ({
  categories: [],
  drinks: [],
  activeDrink: {} as Drink,
  modal: false,
  getCategories: async () => {
    const petition = await getCategoriesFromAPI();
    if (petition?.success) {
      set(() => ({
        categories: petition.data,
      }));
    }
  },
  getDrinks: async (search: SearchDrink) => {
    const petition = await getDrinksFromAPI(search);
    if (petition?.success) {
      set({
        drinks: petition.data,
      });
    }
  },
  openModalAndSetDrink: (id: Drink["idDrink"]) => {
    set({
      modal: true,
    });
  },
  closeModal: () => {
    set({
      modal: false,
    });
  },
  setActiveDrink: (id: Drink["idDrink"]) => {
    console.log(id);
  },
});
