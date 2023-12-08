/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from "react";
import courseData from "../../assets/data/catalog.json";
import { RawDataCourses } from "../../interfaces/RawDataCourses";
import { processRawDataCourses } from "../../helpers/data/processRawDataCourses";
import { DataCourses } from "../../interfaces/DataCourses";
import { DataCourse } from "../../interfaces/DataCourse";
import { lookupValue } from "../../helpers/data/lookupValue";
import "../CoursesList/CoursesList.module.css"; // Import the CSS file

const CoursesList: React.FC = () => {
    const [courses, setCourses] = useState<DataCourses>();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortDirection, setSortDirection] = useState<boolean>(true); // true: ascending, false: descending

    useEffect(() => {
        const parsedData = courseData as RawDataCourses;
        setCourses(processRawDataCourses(parsedData));
    }, []);

    if (!courses) {
        return <span>Loading...</span>; // Add a loading indicator
    }

    const handleSort = () => {
        setSortDirection(!sortDirection);
    };

    // Filter and sort courses based on the search term and credits
    const filteredCourses = Object.keys(courses)
        .map((e) => lookupValue<DataCourse>(courses, e))
        .flat()
        .filter((course: DataCourse) => {
            const searchTermLower = searchTerm.toLowerCase();
            const nameIncludes = course.name
                .toLowerCase()
                .includes(searchTermLower);
            const codeIncludes = course.code
                .toLowerCase()
                .includes(searchTermLower);
            const descriptionIncludes = course.descr
                .toLowerCase()
                .includes(searchTermLower);

            return nameIncludes || codeIncludes || descriptionIncludes;
        })
        .sort((a, b) => {
            if (sortDirection) {
                return parseInt(a.credits) - parseInt(b.credits);
            } else {
                return parseInt(b.credits) - parseInt(a.credits);
            }
        });

    return (
        <div style={{ padding: "10px" }}>
            <h1>Courses List</h1>
            <input
                type="text"
                placeholder="Search for a course"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSort}>
                Sort by Credits ({sortDirection ? "Asc" : "Desc"})
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Credits</th>
                        <th>PreReq</th>
                        <th>Restrict</th>
                        <th>Breadth</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCourses.map(
                        (course: DataCourse, index: number) => (
                            <tr
                                key={index}
                                style={{
                                    backgroundColor: "white",
                                    border: "1px solid #ccc",
                                    padding: "15px",
                                    marginBottom: "20px"
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        "yellow";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor =
                                        "white";
                                }}
                            >
                                <td>{course.name}</td>
                                <td>{course.code}</td>
                                <td>{course.descr}</td>
                                <td>{course.credits}</td>
                                <td>{course.preReq}</td>
                                <td>{course.restrict}</td>
                                <td>{course.breadth}</td>
                                <td>{course.typ}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CoursesList;
