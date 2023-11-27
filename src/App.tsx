/* eslint-disable no-extra-parens */
import React from "react";
import "./App.css";
import logo from "./logo-udel.png";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Plan from "./Plan";
import Planners from "./Planner";
import Introduction from "./Introduction";
import Nav from "./Navbar";

function App(): JSX.Element {
    const [planner, showPlanner] = useState<boolean>(false);

    const ShowPlanner = () => showPlanner(true);

    return (
        <div className="App">
            <Nav />
            <div className="scheduler">
                <img className="blueHen" src={logo} alt="" />
                <h1>CISC Scheduler</h1>
            </div>
            <div style={{ display: "block" }}>
                {planner ? (
                    <Planners />
                ) : (
                    <Introduction showplanner={ShowPlanner} />
                )}
            </div>
        </div>
    );
}

export default App;
