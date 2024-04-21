import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../components/Drink";

const FavoritesView = () => {
  const favorites = useAppStore((store) => store.favorites);

  const hasFavorites = useMemo(() => {
    return favorites.length;
  }, [favorites]);

  return (
    <section>
      <h1 className="text-4xl font-black">Favorites</h1>
      {!hasFavorites ? (
        <p className="mt-5">Add some favorites and they will appear here</p>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          {favorites.map((drink) => (
            <Drink key={drink.idDrink} drink={drink} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FavoritesView;