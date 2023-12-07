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
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const coursesPerPage = 15;

    React.useEffect(() => {
        const parsedData = courseData as RawDataCourses;
        setCourses(processRawDataCourses(parsedData));
    }, []);

    if (courses === undefined) {
        return <span />;
    }
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = Object.keys(courses)
        .slice(indexOfFirstCourse, indexOfLastCourse)
        .map((e) => lookupValue<DataCourse>(courses, e))
        .flat();

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>{"Courses List"}</h1>
            <ul>
                {currentCourses.map((course: DataCourse) => (
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
            <div>
                <ul>
                    {Array.from(
                        {
                            length: Math.ceil(
                                Object.keys(courses).length / coursesPerPage
                            )
                        },
                        (_, i) => (
                            <li key={i + 1} onClick={() => paginate(i + 1)}>
                                {i + 1}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};
export default CoursesList;
