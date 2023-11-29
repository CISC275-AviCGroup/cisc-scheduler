import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./modules/App/App";
import Planners from "./modules/Plan/Planner/Planner";

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
            element: <span>dk dnaielssleiand kd</span>
        }
    ],
    {
        basename: process.env.PUBLIC_URL
    }
);

createRoot(document.getElementById("root") as unknown as HTMLElement).render(
    <RouterProvider router={router} />
);
