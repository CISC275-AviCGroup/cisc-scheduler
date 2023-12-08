/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from "react";
import "./CoursesList.module.css";
import courseData from "../../assets/data/catalog.json";
import { RawDataCourses } from "../../interfaces/RawDataCourses";
import { processRawDataCourses } from "../../helpers/data/processRawDataCourses";
import { DataCourses } from "../../interfaces/DataCourses";
import { DataCourse } from "../../interfaces/DataCourse";
import { lookupValue } from "../../helpers/data/lookupValue";

const CoursesList: React.FC = () => {
    const [courses, setCourses] = useState<DataCourses>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const coursesPerPage = 15;

    useEffect(() => {
        const parsedData = courseData as RawDataCourses;
        setCourses(processRawDataCourses(parsedData));
    }, []);

    if (!courses) {
        return <span />;
    }

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;

    // Filter courses based on the search term
    const filteredCourses = Object.keys(courses)
        .filter((courseKey) => {
            const course = lookupValue<DataCourse>(courses, courseKey);
            return course.filter((subject) =>
                subject.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        })
        .map((e) => lookupValue<DataCourse>(courses, e))
        .flat();

    const currentCourses = filteredCourses.slice(
        indexOfFirstCourse,
        indexOfLastCourse
    );

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>{"Courses List"}</h1>
            <input
                type="text"
                placeholder="Search for a course"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {currentCourses.map((course: DataCourse) => (
                    <li
                        key={course.code}
                        style={{
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                            padding: "15px",
                            marginBottom: "20px"
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = "#fed600";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = "white";
                        }}
                    >
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
                                filteredCourses.length / coursesPerPage
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
