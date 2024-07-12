import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";

///// pages /////

import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Auth/Login/Login";

import Layout from "./components/Layout/Layout";
// import ComingSoon from "./pages/NotFound/ComingSoon";
import NotFound from "./pages/NotFound/NotFound";
import Perfumes from "./pages/Blogs/Blogs";
import AddPerfume from "./pages/Blogs/AddBlogs";
import UpdatePerfume from "./pages/Blogs/UpdateBlogs";

const isUserLoggedIn = localStorage.getItem('isusrlgd')

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: isUserLoggedIn ? <Layout /> : <Navigate to="/login" />,

      children: [
        {
          path: "/",
          element: <Dashboard />,
        },

      
        {
          path: "/*",
          element: <NotFound />,
        },
        {
          path: "/blogs",
          element: <Perfumes />,
        }, 
        {
          path: "/blogs/add",
          element: <AddPerfume />,
        },
        {
          path: "/blogs/update/:id",
          element: <UpdatePerfume />,
        },

      ],
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
  <div className=''><Toaster richColors
  containerClassName="overflow-auto"/>
  <RouterProvider router={router} />;
  </div>
  )
};

export default App;
