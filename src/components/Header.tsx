import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Form } from "./Form";
import { useAppStore } from "../stores/useAppStore";
import { Category } from "../types";

export const Header = () => {
  const getCategories = useAppStore((state) => state.getCategories);
  const categoriesFromApi = useAppStore((state) => state.categories);

  useEffect(() => {
    getCategories();
  }, []);

  const { pathname } = useLocation();

  const currentLocation = useMemo(() => {
    if (pathname === "/") {
      return true;
    }
    return false;
  }, [pathname]);

  return (
    <header
      className={`bg-slate-800 mx-auto px-5 py-8 ${
        currentLocation === true && "bg-index bg-no-repeat bg-cover bg-center"
      }`}
    >
      <div className="max-w-7xl mx-auto gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <NavLink to="/">
              <img className="w-32" src="logo.svg" alt="logotipo" />
            </NavLink>
          </div>
          <nav className="flex gap-5">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-orange-400 text-2xl font-extrabold hover:text-orange-400`
                  : `text-white text-2xl font-extrabold hover:scale-x-110 hover:text-orange-400 transition-all ease-linear`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-orange-400 text-2xl font-extrabold hover:text-orange-400`
                  : `text-white text-2xl font-extrabold hover:scale-x-110 hover:text-orange-400 transition-all ease-linear`
              }
              to="/favorites"
            >
              Favorites
            </NavLink>
          </nav>
        </div>
        {currentLocation && <Form categories={categoriesFromApi as Category} />}
      </div>
    </header>
  );
};
