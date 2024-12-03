import React from "react";
import Navbar from "../components/Navbar";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      //   {
      //     path: "/signin",
      //     element: <SignIn></SignIn>,
      //   },
      //   {
      //     path: "/register",
      //     element: <SignUp></SignUp>,
      //   },
    ],
  },
]);

export default router;
