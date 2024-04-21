import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import { DrinkModal } from "../types";
import { toast } from "react-toastify";

export default function Modal() {
  const modal = useAppStore((store) => store.modal);
  const closeModal = useAppStore((store) => store.closeModal);
  const drinkModal = useAppStore((store) => store.drinkModal);
  const addFavorite = useAppStore((store) => store.addFavorite);
  const favorites = useAppStore((store) => store.favorites);
  const setLocalStorage = useAppStore((store) => store.setLocalStorage);

  const isFavorite = useMemo(() => {
    return favorites.some((f) => f.idDrink === drinkModal.idDrink);
  }, [drinkModal]);

  const formatInstructions = () => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient = drinkModal[`strIngredient${i}` as keyof DrinkModal];
      const measure = drinkModal[`strMeasure${i}` as keyof DrinkModal];
      if (ingredient && measure) {
        ingredients.push(
          <li key={i}>
            {drinkModal[`strIngredient${i}` as keyof DrinkModal] +
              ` - ` +
              drinkModal[`strMeasure${i}` as keyof DrinkModal]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            closeModal();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                  >
                    {drinkModal.strDrink}
                  </Dialog.Title>
                  <img
                    className="w-72 mx-auto"
                    src={`${drinkModal.strDrinkThumb}`}
                    alt={`logo ${drinkModal.strDrink}`}
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Ingredients and Measures
                  </Dialog.Title>
                  {formatInstructions()}
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Instructions
                  </Dialog.Title>
                  <p>{drinkModal.strInstructions}</p>
                  <div className="md:flex justify-center gap-5">
                    <button
                      className={`${
                        isFavorite
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-orange-500 hover:bg-orange-600"
                      } transition-colors text-white font-semibold p-2 mt-4 w-full rounded-sm`}
                      onClick={() => {
                        isFavorite
                          ? toast.success("Recipe removed from favorites")
                          : toast.success("Recipe added to favorites");
                        closeModal();
                        addFavorite(drinkModal);
                        setLocalStorage();
                      }}
                    >
                      {isFavorite ? "Remove Favorite" : "Add Favorite"}
                    </button>
                    <button
                      className="bg-gray-500 hover:bg-gray-600 transition-colors text-white font-semibold p-2 mt-4 w-full rounded-sm"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
