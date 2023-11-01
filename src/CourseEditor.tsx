import React, { useState } from "react";
import "./CourseEditor.css";
import { Course } from "./interfaces/course";

interface CourseEditorProps {
    onAddCourse: (newCourse: Course) => void;
}

export const CourseEditor: React.FC<CourseEditorProps> = ({ onAddCourse }) => {
    const [course, setCourse] = useState({
        code: 0,
        title: "",
        credits: 0
    });
    const isCourseValid = () => {
        // Add your validation logic here
        // For example, you can check if the title is not empty and credits are greater than 0.
        return course.title.trim() !== "" && course.credits > 0;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setCourse({ ...course, [name]: value });
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (isCourseValid()) {
            onAddCourse(course);
            setCourse({
                code: 0,
                title: "",
                credits: 0
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

                <button type="submit">Submit</button>
            </form>

            {/* <h2>Course Data</h2> */}

            {/* <p>Code: {course.code}</p>
            <p>Title: {course.title}</p>
            <p>Credits: {course.credits}</p> */}
        </div>
    );
};
