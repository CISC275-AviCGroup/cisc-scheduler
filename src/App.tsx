import React from "react";
import "./App.css";
import logo from "./logo-udel.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Plan from "./Plan";
import Planners from "./Planner";

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="scheduler">
                <img className="blueHen" src={logo} alt="" />
                <h1>CISC Scheduler</h1>
            </div>
            <div style={{ display: "block" }}>
                <Planners></Planners>
            </div>
            {/* <Plan /> */}
        </div>
    );
}

export default App;
