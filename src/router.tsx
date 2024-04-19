import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexView } from "./views/IndexView";
import { FavoritesView } from "./views/FavoritesView";
import { Layout } from "./layout/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexView />} />
          <Route path="/favorites" element={<FavoritesView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
