type FormProps = {
  categories:
    | {
        strCategory: string;
      }[]
    | undefined;
};

export const Form = ({ categories }: FormProps) => {
  return (
    <form className="p-8 bg-orange-400 mt-10 rounded-lg w-full md:w-2/3 lg:w-5/12 animate-fade-right animate-once animate-delay-200 animate-ease-in-out">
      <div className="flex flex-col">
        <label
          className="text-xl mb-3 text-white font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          htmlFor="ingredient"
        >
          Bebida o Ingrediente
        </label>
        <input
          className="p-2 rounded-lg focus:outline-none"
          type="text"
          placeholder="Vodka, Tequila, Café..."
          name="ingredient"
          id="ingredient"
        />
      </div>
      <div className="flex flex-col mt-4">
        <label
          className="text-xl mb-3 text-white font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          htmlFor="category"
        >
          Categoría
        </label>
        <select
          className="p-2 rounded-lg focus:outline-none"
          name="category"
          id="category"
        >
            {
                categories?.map((category) => (
                    <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                ))
            }
        </select>
      </div>
      <input
        className="block text-center w-full bg-orange-900 hover:bg-orange-800 transition-colors ease-in p-2 text-white font-extrabold text-lg cursor-pointer mt-7"
        type="submit"
        value={"Buscar Recetas"}
      />
    </form>
  );
};
