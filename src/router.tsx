import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexView } from "./views/IndexView";
import { Layout } from "./layout/Layout";

const FavoritesView = lazy(() => import("./views/FavoritesView"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexView />} />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<div>Carregando...</div>}>
                <FavoritesView />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
