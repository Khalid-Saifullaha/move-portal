import React from "react";

import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";
import Login from "../pages/Login";
import Error from "../pages/Error";
import MoveDetails from "../pages/MoveDetails";
import UpdateMovee from "../pages/UpdateMovee";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AllMovies></AllMovies>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:4000/move"),
      },
      {
        path: "/addMovie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },

      {
        path: "/favorites",
        element: (
          <PrivateRoute>
            <MyFavorites></MyFavorites>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <MoveDetails></MoveDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/move/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateMovee></UpdateMovee>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/move/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
