import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../components/Drink";

export const IndexView = () => {
  const drinks = useAppStore((store) => store.drinks);

  const hasDrinks = useMemo(() => {
    return drinks.length;
  }, [drinks]);

  return (
    <section>
      <h1 className="text-4xl font-black">Recetas</h1>
      {!hasDrinks ? (
        <p className="mt-5">
          Llena el formulario para empezar a ver las recetas
        </p>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          {drinks.map((drink) => (
            <Drink key={drink.idDrink} drink={drink} />
          ))}
        </div>
      )}
    </section>
  );
};
