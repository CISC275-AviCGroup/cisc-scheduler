import React from "react";
import "./App.css";
import { CourseEditor } from "./CourseEditor";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>CISC Scheduler</h1>
            <CourseEditor />
        </div>
    );
}

export default App;
