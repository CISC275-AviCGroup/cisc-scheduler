import React from "react";
import "./App.css";
import { MakeSemester } from "./MakeSemester";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>CISC Scheduler</h1>
            <MakeSemester />
        </div>
    );
}

export default App;
