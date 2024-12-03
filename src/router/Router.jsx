import React from "react";

import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";
import Login from "../pages/Login";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("http://localhost:4000/move"),
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>,
      },

      {
        path: "/favorites",
        element: <MyFavorites></MyFavorites>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
