import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ThemeContextProvider from "../context/ThemeContextProvider";

const MainLayout = () => {
  return (
    <ThemeContextProvider>
      <div className="dark:bg-gray-900 dark:text-white ">
        <Navbar></Navbar>

        <Outlet></Outlet>

        <Footer></Footer>
      </div>
    </ThemeContextProvider>
  );
};

export default MainLayout;
