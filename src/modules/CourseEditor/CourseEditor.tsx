import React, { useState } from "react";
import "./CourseEditor.css";
import { Button } from "react-bootstrap";
import { LocalCourse } from "../../interfaces/LocalCourse";

interface CourseEditorProps {
    onAddCourse: (newCourse: LocalCourse) => void;
}

export const CourseEditor: React.FC<CourseEditorProps> = ({ onAddCourse }) => {
    const [course, setCourse] = useState<LocalCourse>({
        code: "",
        title: "",
        credits: "",
        prerequisites: []
    });
    const isCourseValid = () => {
        return course.title.trim() !== "" && Number(course.credits) > 0;
        course.prerequisites.length >= 0;
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
                code: "0",
                title: "",
                credits: "0",
                prerequisites: []
            });
        } else {
            alert(
                "Please fill in all required fields and make sure credits are greater than 0."
            );
        }
    };
    return (
        <div className="fade-in">
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
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};
