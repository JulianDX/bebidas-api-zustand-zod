import { ChangeEvent, FormEvent, useState } from "react";
import { Category, SearchDrink } from "../types";
import { useAppStore } from "../stores/useAppStore";
import { toast } from "react-toastify";

type FormProps = {
  categories: Category;
};

export const Form = ({ categories }: FormProps) => {
  const [search, setSearch] = useState<SearchDrink>({
    ingredient: "",
    category: "Ordinary Drink",
  });

  const getDrinks = useAppStore((state) => state.getDrinks);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      toast.error("Ingrese la bebida o ingredientes");
      return;
    }

    getDrinks(search);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="p-8 bg-orange-400 mt-10 rounded-lg w-full md:w-2/3 lg:w-5/12 animate-fade-right animate-once animate-delay-200 animate-ease-in-out"
    >
      <div className="flex flex-col">
        <label
          className="text-xl mb-3 text-white font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          htmlFor="ingredient"
        >
          Drink or Ingredients
        </label>
        <input
          className="p-2 rounded-lg focus:outline-none"
          type="text"
          placeholder="Vodka, Tequila, Coffee..."
          name="ingredient"
          id="ingredient"
          value={search.ingredient}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="flex flex-col mt-4">
        <label
          className="text-xl mb-3 text-white font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          htmlFor="category"
        >
          Category
        </label>
        <select
          className="p-2 rounded-lg focus:outline-none"
          name="category"
          id="category"
          value={search.category}
          onChange={(e) => handleChange(e)}
        >
          {categories?.map((category) => (
            <option key={category.strCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      <input
        className="block text-center w-full bg-orange-900 hover:bg-orange-800 transition-colors ease-in p-2 text-white font-extrabold text-lg cursor-pointer mt-7"
        type="submit"
        value={"Search Recipes"}
      />
    </form>
  );
};
