import { Outlet } from "react-router";
import { Header } from "../components/Header";
import Modal from "../components/Modal";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="container max-w-7xl mx-auto py-8 px-4">
        <Outlet />
      </main>
      <Modal />
    </>
  );
};
