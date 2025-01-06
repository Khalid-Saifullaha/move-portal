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

import MyProfile from "../pages/MyProfile";
import UserProfile from "../pages/UserProfile";
import ComingSoon from "../pages/ComingSoon";
import ContactUs from "../pages/ContuctUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment-10-server-ebon-zeta.vercel.app/move"),
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () =>
          fetch("https://assignment-10-server-ebon-zeta.vercel.app/move"),
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
        path: "/comingSoon",
        element: <ComingSoon></ComingSoon>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
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
        element: (
          <PrivateRoute>
            <MoveDetails></MoveDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-ebon-zeta.vercel.app/move/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateMovee></UpdateMovee>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-ebon-zeta.vercel.app/move/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
