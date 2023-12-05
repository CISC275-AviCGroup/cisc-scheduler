import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Planners from "./modules/Plan/Planner/Planner";
import Introduction from "./modules/Introduction/Introduction";
import { Layout } from "./modules/App/layout/Layout";

const router = createBrowserRouter(
    [
        {
            children: [
                {
                    element: <Planners />,
                    path: "planner"
                },
                { element: <Introduction />, path: "/" }
            ],
            path: "/",
            element: <Layout />
        }
    ],
    {
        basename: process.env.PUBLIC_URL
    }
);

createRoot(document.getElementById("root") as unknown as HTMLElement).render(
    <RouterProvider router={router} />
);
