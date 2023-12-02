import React, { useState, useEffect } from "react";

interface Course {
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
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        // Fetch courses data from the JSON file
        const fetchData = async () => {
            try {
                const response = await fetch("catalog.json");
                const data = await response.json();
                setCourses(Object.values(data)); // Assuming the courses are directly nested under the root
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
                        <p> Credit:{course.credits}</p>
                        <p> preReq:{course.preReq}</p>
                        <p> restrict:{course.restrict}</p>
                        <p>breadth: {course.breadth}</p>
                        <p>type: {course.typ}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoursesList;
