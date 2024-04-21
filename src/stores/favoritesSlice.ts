import { StateCreator } from "zustand";
import { DrinkArray, DrinkModal } from "../types";

export type FavoriteSliceType = {
  favorites: DrinkArray;
  addFavorite: (drink: DrinkModal) => void;
  setLocalStorage: () => void;
};

export const createFavoriteSlice: StateCreator<FavoriteSliceType> = (
  set,
  get
) => ({
  favorites: JSON.parse(localStorage.getItem("favorites")!) || [],
  addFavorite: (drink) => {
    const found = get().favorites.some((f) => f.idDrink === drink.idDrink);
    if (found) {
      set({
        favorites: get().favorites.filter((f) => f.idDrink !== drink.idDrink),
      });
    } else {
      const favorites = [...get().favorites, drink];
      set({
        favorites,
      });
    }
  },
  setLocalStorage: () => {
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
});
