import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Planners from "./Planner";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "planner",
        element: <Planners />
    },
    {
        path: "intro",
        element: <span>dk dnaiels</span>
    }
]);

createRoot(document.getElementById("root") as unknown as HTMLElement).render(
    <RouterProvider router={router} />
);
