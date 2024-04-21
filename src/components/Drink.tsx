import { useAppStore } from "../stores/useAppStore";
import { Drink as DrinkType } from "../types";

type DrinkProps = {
  drink: DrinkType;
};

export const Drink = ({ drink }: DrinkProps) => {
  const openModalAndSetDrink = useAppStore(
    (store) => store.openModalAndSetDrink
  );
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-between">
      <div>
        <div className="overflow-hidden">
          <img
            className="transition-transform hover:scale-110"
            src={`${drink.strDrinkThumb}`}
            alt={`Drink ${drink.strDrink}`}
          />
        </div>
        <h1 className="text-xl text-orange-600 font-extrabold px-4 mt-3">
          {drink.strDrink}
        </h1>
      </div>
      <div className="p-4">
        <button
          onClick={() => {
            openModalAndSetDrink(drink.idDrink);
          }}
          className="bg-orange-500 hover:bg-orange-600 transition-colors ease-in block w-full text-white font-semibold p-2"
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
};
