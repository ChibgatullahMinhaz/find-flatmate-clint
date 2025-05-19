import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import ErrorLayouts from "../layouts/ErrorLayouts";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
    ,{
        path: '*',
        element: <ErrorLayouts /> 
    }
])