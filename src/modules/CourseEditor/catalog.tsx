import React, { useState, useEffect } from "react";
import "./catalog.css";
interface Courses {
    code: string;
    name: string;
    descr: string;
    credits: string;
    preReq: string;
    restrict: string;
    breadth: string;
    typ: string;
}

const CoursesList: React.FC = () => {
    const [courses, setCourses] = useState<Courses[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "src/modules/CourseEditor/catalog.json"
                );
                const data = await response.json();
                setCourses(Object.values(data));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Courses List</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.code}>
                        <strong>{course.name}</strong>
                        <p>Code: {course.code}</p>
                        <p>Description: {course.descr}</p>
                        <p>Credit: {course.credits}</p>
                        <p>PreReq: {course.preReq}</p>
                        <p>Restrict: {course.restrict}</p>
                        <p>Breadth: {course.breadth}</p>
                        <p>Type: {course.typ}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default CoursesList;
