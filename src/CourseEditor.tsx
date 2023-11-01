import React, { useState } from "react";
import "./CourseEditor.css";
import { Course } from "./interfaces/course";

interface CourseEditorProps {
    onAddCourse: (newCourse: Course) => void;
}

export const CourseEditor: React.FC<CourseEditorProps> = ({ onAddCourse }) => {
    const [course, setCourse] = useState<Course>({
        code: 0,
        title: "",
        credits: 0,
        prerequisites: []
    });
    const isCourseValid = () => {
        return course.title.trim() !== "" && course.credits > 0;
        course.prerequisites.length >= 0;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setCourse({ ...course, [name]: value });
    };
    const handlePrerequisitesChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        const prerequisites = value.split(",").map((code) => code.trim());
        setCourse({ ...course, prerequisites });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (isCourseValid()) {
            onAddCourse(course);
            setCourse({
                code: 0,
                title: "",
                credits: 0,
                prerequisites: []
            });
        } else {
            alert(
                "Please fill in all the required fields and make sure credits are greater than 0."
            );
        }
    };
    return (
        <div className="fade-in">
            {/* <h1>Course Editor</h1> */}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="code"
                    placeholder="Course code"
                    value={course.code}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="title"
                    placeholder="Course title"
                    value={course.title}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="credits"
                    placeholder="Credits"
                    value={course.credits}
                    onChange={handleChange}
                />
                <div>
                    <p>Prerequisite courses:</p>
                    <label>
                        <input
                            type="checkbox"
                            name="prerequisites"
                            value="CISC 108"
                            checked={course.prerequisites.includes("CISC 108")}
                            onChange={handlePrerequisitesChange}
                        />
                        CISC 108
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="prerequisites"
                            value="CISC 181"
                            checked={course.prerequisites.includes("CISC 181")}
                            onChange={handlePrerequisitesChange}
                        />
                        CISC 181
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
