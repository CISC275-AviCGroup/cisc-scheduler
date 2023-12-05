/* eslint-disable no-extra-parens */
// CoursesList.jsx
import React, { useState, useEffect } from "react";
import "./catalog.css";
import catalogData from "./catalog.json";

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
export type courseData = {
    code: string;
    name: string;
    descr: string;
    credits: string;
    preReq: string;
    restrict: string;
    breadth: string;
    typ: string;
};

const convertToCourses = (data: Record<string, courseData>): Courses[] => {
    const coursesArray: Courses[] = [];

    for (const code in data) {
        if (Object.prototype.hasOwnProperty.call(data, code)) {
            const courseData: Record<string, string> = data[code];
            const { code: courseCode, ...rest } = courseData;
            const course: Courses = {
                code: courseCode,
                name: rest.name,
                descr: rest.descr,
                credits: rest.credits,
                preReq: rest.preReq,
                restrict: rest.restrict,
                breadth: rest.breadth,
                typ: rest.typ
            };
            coursesArray.push(course);
        }
    }

    return coursesArray;
};

const CoursesList: React.FC = () => {
    const [courses, setCourses] = useState<Courses[]>([]);

    useEffect(() => {
        const coursesArray = convertToCourses(catalogData);
        setCourses(coursesArray);
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
