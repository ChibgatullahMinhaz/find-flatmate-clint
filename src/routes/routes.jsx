import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import ErrorLayouts from "../layouts/ErrorLayouts";
import MyListing from "../pages/MyListing";
import BrowseListing from "../pages/BrowseListing";
import AddToFindRommate from "../pages/AddToFindRommate";
import Login from "../Components/Auth/Login";
import SingUp from "../Components/Auth/SingUp";
import PrivateRoute from "./PrivetRoute";
import UpdatePage from "../pages/UpdatePage";
import DetailsPage from "../pages/DetailsPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Add-to-Find-Roommate",
        element: (
          <PrivateRoute>
            <AddToFindRommate />
          </PrivateRoute>
        ),
      },
      {
        path: "/BrowseListing",
        element: <BrowseListing />,
      },
      {
        path: "/MyListing",
        element: (
          <PrivateRoute>
            <MyListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/updatePost/:Id",
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:Id",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/SignUp",
        element: <SingUp />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorLayouts />,
  },
]);
