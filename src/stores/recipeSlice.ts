import { StateCreator } from "zustand";
import {
  getCategoriesFromAPI,
  getDrinksFromAPI,
  getRecipeFromAPI,
} from "../services/RecipeServices";
import { Category, Drink, DrinkArray, DrinkModal, SearchDrink } from "../types";

export type RecipeSliceType = {
  categories: Category;
  drinks: DrinkArray;
  modal: boolean;
  drinkModal: DrinkModal;
  getCategories: () => Promise<void>;
  getDrinks: (search: SearchDrink) => Promise<void>;
  openModalAndSetDrink: (id: Drink["idDrink"]) => void;
  closeModal: () => void;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: [],
  drinks: [],
  activeDrink: {} as Drink,
  modal: false,
  drinkModal: {} as DrinkModal,
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
  openModalAndSetDrink: async (id: Drink["idDrink"]) => {
    const petition = await getRecipeFromAPI(id);
    if (petition.success) {
      set({
        modal: true,
        drinkModal: petition.data,
      });
    }
  },
  closeModal: () => {
    set({
      modal: false,
    });
  },
});
