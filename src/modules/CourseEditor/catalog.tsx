/* eslint-disable no-extra-parens */
import React from "react";
import "./catalog.css";
import "../../assets/data/catalog.json";
import courseData from "../../assets/data/CourseData";
import { DataCourse } from "../../interfaces/DataCourse";

const CoursesList: React.FC = () => {
    const [courses, setCourses] = React.useState<DataCourse[]>([]);

    React.useEffect(() => {
        const parsedData = JSON.parse(
            courseData as unknown as string
        ) as DataCourse[];
        setCourses(parsedData);
    }, []);

    return (
        <div>
            <h1>Courses List</h1>
            <ul>
                {courses.map((course: DataCourse) => (
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
