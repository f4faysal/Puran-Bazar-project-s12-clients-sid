import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CategoriesAll from "../page/Home/Categories/CategoriesAll/CategoriesAll";
import CategoriseItem from "../page/Home/Categories/CategoriseItem/CategoriseItem";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Signup from "../page/Login/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <CategoriesAll />,
      },

      {
        path: "/categoriseItem/:slug",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.slug}`, {
            headers: {
              authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
          }),
        element: <CategoriseItem />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
