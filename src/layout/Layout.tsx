import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="container max-w-7xl mx-auto py-16">
        <Outlet />
      </main>
    </>
  );
};
