import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ThemeContextProvider from "../context/ThemeContextProvider";
import Banner from "../components/Banner";

const MainLayout = () => {
  return (
    <ThemeContextProvider>
      <div className="dark:bg-gray-900 dark:text-white ">
        <Navbar></Navbar>
        <Banner />
        <div className="w-9/12 mx-auto ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </ThemeContextProvider>
  );
};

export default MainLayout;
