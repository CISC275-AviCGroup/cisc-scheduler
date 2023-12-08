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
}

export const EditSemesterModal = ({
    semester,
    show,
    handleClose
}: EditSemesterModalProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [title, setTitle] = useState<string>(semester.title);
    const [year, setYear] = useState<string>(semester.year);
    const [courses, setCourses] = useState<LocalCourse[]>(semester.courses);
    const [totCreds, setTotCreds] = useState<number>(0);

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

    // This 'coursesList' includes all the courses mentioned, following the 'LocalCourse' interface.
    console.log(courses);
    console.log("hi");

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={true} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="seasonSelect">
                            <Form.Label style={{ paddingRight: "10px" }}>
                                Select Season:{" "}
                            </Form.Label>
                            <Form.Check
                                inline
                                type="radio"
                                name="response"
                                onChange={(e) => setTitle(e.target.value)}
                                id="Fall"
                                label="Fall"
                                value="Fall"
                                checked={title === "Fall"}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                name="response"
                                onChange={(e) => setTitle(e.target.value)}
                                id="Winter"
                                label="Winter"
                                value="Winter"
                                checked={title === "Winter"}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                name="response"
                                onChange={(e) => setTitle(e.target.value)}
                                id="Spring"
                                label="Spring"
                                value="Spring"
                                checked={title === "Spring"}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                name="response"
                                onChange={(e) => setTitle(e.target.value)}
                                id="Summer"
                                label="Summer"
                                value="Summer"
                                checked={title === "Summer"}
                            />
                            <Form.Control
                                type="number"
                                value={year}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setYear(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <table>
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th style={{ paddingLeft: "100px" }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coreCsCourses.map((course) => (
                                <tr key={course.title + " " + course.code}>
                                    <td>{course.code + ": " + course.title}</td>
                                    <td style={{ paddingLeft: "100px" }}>
                                        {courses.some(
                                            (semesterCourse) =>
                                                semesterCourse.code ===
                                                course.code
                                        )
                                            ? "Taken"
                                            : "Not Taken"}
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
                                    <td>{course.prerequisites.join(", ")}</td>
                                    <td>
                                        <button>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button>Add Course</button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
