import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import MyOrders from "../page/Dashboard/Buyers/MyOrders";
import CategoriesAll from "../page/Home/Categories/CategoriesAll/CategoriesAll";
import CategoriseItem from "../page/Home/Categories/CategoriseItem/CategoriseItem";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Signup from "../page/Login/Signup";
import PrivateRoute from "./PrivateRoute";

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
        path: "/categories/:slug",
        loader: async ({ params }) =>
         await fetch(`http://localhost:5000/categories/${params.slug}`, {
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

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/my-orders",
        element: <MyOrders></MyOrders>,
      },
    ],
  },
]);
export default router;
