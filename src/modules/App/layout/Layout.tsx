import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";

export const Layout = (): JSX.Element => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};
