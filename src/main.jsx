import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { routes } from "./routes/routes";
import AuthProvider from "./Context/Provider/AuthProvider";
import PostsProvider from "./Context/Provider/PostsProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <PostsProvider>
        <RouterProvider router={routes} />
      </PostsProvider>
    </AuthProvider>
  </StrictMode>
);
