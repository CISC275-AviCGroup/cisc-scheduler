import React from "react";
import "./App.css";
import { MakeSemester } from "./MakeSemester";

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="scheduler">
                <h1>CISC Scheduler</h1>
            </div>
            <MakeSemester />
        </div>
    );
}

export default App;
