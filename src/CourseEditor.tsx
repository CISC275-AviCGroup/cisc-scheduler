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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setCourse({ ...course, [name]: value });
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onAddCourse(course);
        setCourse({
            code: course.code,
            title: course.title,
            credits: course.credits
        });
    };
    return (
        <div>
            <h1>Add Course:</h1>
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

            {/*             <h2>Course Data</h2>

            <p>Code: {course.code}</p>
            <p>Title: {course.title}</p>
            <p>Credits: {course.credits}</p> */}
        </div>
    );
};
