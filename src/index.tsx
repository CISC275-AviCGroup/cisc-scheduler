import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./modules/App/App";
import Planners from "./modules/Plan/Planner/Planner";
import Introduction from "./modules/Introduction/Introduction";

const router = createBrowserRouter(
    [
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
            element: <Introduction />
        }
    ],
    {
        basename: process.env.PUBLIC_URL
    }
);

createRoot(document.getElementById("root") as unknown as HTMLElement).render(
    <RouterProvider router={router} />
);
