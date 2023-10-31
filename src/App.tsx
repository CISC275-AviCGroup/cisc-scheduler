import React from "react";
import "./App.css";
import { CourseEditor } from "./CourseEditor";

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="scheduler">
                <h1>CISC Scheduler</h1>
            </div>
            <CourseEditor />
        </div>
    );
}

export default App;
