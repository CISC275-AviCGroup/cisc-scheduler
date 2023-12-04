/* eslint-disable no-extra-parens */
import React from "react";
import "./App.css";
// import logo from "../../assets/images/logo-udel.png";
import Introduction from "../Introduction/Introduction";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";

function App(): JSX.Element {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Introduction />} />
                    <Route path="intro" element={<div>{"hello"}</div>} />
                    <Route path="planner" element={<div>{"hi there"}</div>} />
                </Route>
            </Routes>
            {/* <div className="scheduler">
                <img className="blueHen" src={logo} alt="" />
                <h1>{"CISC Scheduler"}</h1>
            </div>
            <div style={{ display: "block" }}>
                <Introduction />
            </div> */}
        </div>
    );
}

export default App;
