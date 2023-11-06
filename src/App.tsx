import React from "react";
import "./App.css";
import logo from "./logo-udel.png";
import Plan from "./Plan";

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="scheduler">
                <img className="blueHen" src={logo} alt="" />
                <h1>CISC Scheduler</h1>
            </div>
            <Plan />
        </div>
    );
}

export default App;
