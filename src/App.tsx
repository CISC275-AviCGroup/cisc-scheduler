/* eslint-disable no-extra-parens */
import React from "react";
import "./App.css";
import logo from "./logo-udel.png";
import Introduction from "./Introduction";
import Nav from "./Navbar";

function App(): JSX.Element {
    return (
        <div className="App">
            <Nav />
            <div className="scheduler">
                <img className="blueHen" src={logo} alt="" />
                <h1>CISC Scheduler</h1>
            </div>
            <div style={{ display: "block" }}>
                <Introduction />
            </div>
        </div>
    );
}

export default App;
