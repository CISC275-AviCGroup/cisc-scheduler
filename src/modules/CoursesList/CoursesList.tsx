/* eslint-disable no-extra-parens */
import React from "react";
import "./CoursesList.module.css";
import courseData from "../../assets/data/catalog.json";
import { RawDataCourses } from "../../interfaces/RawDataCourses";
import { processRawDataCourses } from "../../helpers/data/processRawDataCourses";
import { DataCourses } from "../../interfaces/DataCourses";
import { DataCourse } from "../../interfaces/DataCourse";
import { lookupValue } from "../../helpers/data/lookupValue";

const CoursesList: React.FC = () => {
    const [courses, setCourses] = React.useState<DataCourses>();

    React.useEffect(() => {
        const parsedData = courseData as RawDataCourses;
        setCourses(processRawDataCourses(parsedData));
    }, []);

    if (courses === undefined) {
        return <span />;
    }

    return (
        <div>
            <h1>{"Courses List"}</h1>
            <ul>
                {Object.keys(courses).map((e) => {
                    return lookupValue<DataCourse>(courses, e).map(
                        (course: DataCourse) => (
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
                        )
                    );
                })}
            </ul>
        </div>
    );
};

export default CoursesList;
