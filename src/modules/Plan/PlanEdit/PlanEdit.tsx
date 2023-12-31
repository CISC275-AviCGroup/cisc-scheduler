/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Semester } from "../../../interfaces/semester";
import { LocalCourse } from "../../../interfaces/LocalCourse";
import "./PlanEdit.css";

interface EditSemesterModalProps {
    semester: Semester;
    show: boolean;
    handleClose: () => void;
    saveChanges: (updatedSemester: Semester) => void;
}

export const EditSemesterModal = ({
    semester,
    show,
    handleClose,
    saveChanges
}: EditSemesterModalProps) => {
    const [title, setTitle] = useState<string>(semester.title);
    const [year, setYear] = useState<string>(semester.year);
    const [courses, setCourses] = useState<LocalCourse[]>(semester.courses);
    const [totCreds, setTotCreds] = useState<number>(0);
    const [course, setCourse] = useState<string>("");

    const coreCsCourses = [
        {
            credits: 3,
            code: "CISC 108",
            prerequisites: [],
            title: "Introduction to Computer Science I"
        },
        {
            credits: 3,
            code: "CISC 181",
            prerequisites: ["CISC 108"],
            title: "Introduction to Computer Science II"
        },
        {
            credits: 3,
            code: "CISC 210",
            prerequisites: ["CISC 108"],
            title: "Introduction to Systems Programming"
        },
        {
            credits: 3,
            code: "CISC 220",
            prerequisites: ["CISC 210"],
            title: "Data Structures"
        },
        {
            credits: 3,
            code: "CISC 260",
            prerequisites: ["CISC 210"],
            title: "Machine Organization and Assembly Language"
        },
        {
            credits: 3,
            code: "CISC 275",
            prerequisites: ["CISC 108"],
            title: "Introduction to Software Engineering"
        },
        {
            credits: 3,
            code: "CISC 303",
            prerequisites: ["CISC 210"],
            title: "Automata Theory"
        },
        {
            credits: 3,
            code: "CISC 320",
            prerequisites: ["CISC 220"],
            title: "Introduction to Algorithms"
        },
        {
            credits: 3,
            code: "CISC 361",
            prerequisites: ["CISC 220"],
            title: "Operating Systems"
        },
        {
            credits: 3,
            code: "CISC 372",
            prerequisites: ["CISC 220"],
            title: "Parallel Computing"
        },
        {
            credits: 4,
            code: "MATH 205",
            prerequisites: [],
            title: "Statistical Methods"
        },
        {
            credits: 3,
            code: "MATH 210",
            prerequisites: [],
            title: "Discrete Mathematics I",
            minimumGrade: "C-"
        },
        {
            credits: 4,
            code: "MATH 241",
            prerequisites: ["MATH 210"],
            title: "Analytic Geometry and Calculus A"
        },
        {
            credits: 4,
            code: "MATH 242",
            prerequisites: ["MATH 241"],
            title: "Analytic Geometry and Calculus B"
        },
        {
            credits: 3,
            code: "MATH 312",
            prerequisites: [],
            title: "Written Communications in Business"
        },
        {
            credits: 3,
            code: "MATH 110",
            prerequisites: [],
            title: "English Composition"
        },
        {
            credits: 3,
            code: "CISC 498",
            prerequisites: [],
            title: "Computer Science Senior Design Project I"
        },
        {
            credits: 3,
            code: "CISC 499",
            prerequisites: ["CISC 498"],
            title: "Computer Science Senior Design Project II"
        },
        {
            credits: 3,
            code: "CISC 355",
            prerequisites: [],
            title: "Computers, Ethics and Society"
        }
    ];

    const removeCourse = (index: number) => {
        const updatedCourses = [...courses];
        updatedCourses.splice(index, 1);
        setCourses(updatedCourses);
    };

    const handleSave = () => {
        const totalCredits = courses.reduce(
            (accumulator, course) => accumulator + course.credits,
            0
        );

        setTotCreds(totalCredits);

        const updatedSemester: Semester = {
            title,
            year,
            courses,
            tot_creds: totCreds
        };

        // Update the state of the Semester object using saveChanges function
        saveChanges(updatedSemester);
        handleClose(); // Close the modal after saving changes
    };

    function updateSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setCourse(event.target.value);
    }

    const courseAdder = () => {
        // Search for the course in coreCsCourses
        const foundCourse = coreCsCourses.find(
            (coreCourse) => coreCourse.code === course
        );

        if (
            foundCourse &&
            !courses.some((semesterCourse) => semesterCourse.code === course)
        ) {
            const newCourse: LocalCourse = {
                credits: foundCourse.credits,
                code: foundCourse.code,
                prerequisites: foundCourse.prerequisites,
                title: foundCourse.title
            };
            setCourses([...courses, newCourse]);
        }
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={true} size="xl">
                {/* ... (modal header and body) */}
                <Modal.Body>
                    <table>{/* ... (your course data) */}</table>
                    <h2>Course Table</h2>
                    <table>
                        <tbody>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Course</th>
                                        <th style={{ paddingLeft: "100px" }}>
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coreCsCourses.map((course) => (
                                        <tr
                                            key={
                                                course.title + " " + course.code
                                            }
                                        >
                                            <td>
                                                {course.code +
                                                    ": " +
                                                    course.title}
                                            </td>
                                            <td
                                                style={{ paddingLeft: "100px" }}
                                            >
                                                {courses.some(
                                                    (semesterCourse) =>
                                                        semesterCourse.code ===
                                                        course.code
                                                )
                                                    ? "Taken ✅"
                                                    : "Not Taken ❌"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h2>Course Table</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Title</th>
                                        <th>Credits</th>
                                        <th>Prerequisites</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.map((course, index) => (
                                        <tr key={index}>
                                            <td>{course.code}</td>
                                            <td>{course.title}</td>
                                            <td>{course.credits}</td>
                                            <td>
                                                {course.prerequisites.join(
                                                    ", "
                                                )}
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        removeCourse(index)
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </tbody>
                    </table>
                    <div className="addButton">
                        <div>
                            <Form.Group controlId="SearchCourse">
                                <Form.Label>SearchCourse:</Form.Label>
                                <Form.Control
                                    type="string"
                                    value={course}
                                    onChange={updateSearch}
                                    placeholder="Course Code"
                                />
                            </Form.Group>
                        </div>
                        <div>
                            <button className="margin2" onClick={courseAdder}>
                                Add Course
                            </button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSave()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
