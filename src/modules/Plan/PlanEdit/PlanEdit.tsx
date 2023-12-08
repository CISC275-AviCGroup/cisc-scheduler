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
    const [title, setTitle] = useState<string>(semester.title);
    const [year, setYear] = useState<string>(semester.year);
    const [courses, setCourses] = useState<LocalCourse[]>(semester.courses);
    const [totCreds, setTotCreds] = useState<number>(0);
    const [course, setCourse] = useState<string>("TitleCode");

    function updateSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setCourse(event.target.value);
    }

    const coreCsCourses = [
        // ... (your course data)
    ];

    const courseAdder = () => {
        const [code, title] = course.split(" ");
        if (!courses.some((semesterCourse) => semesterCourse.code === code)) {
            const newCourse: LocalCourse = {
                credits: 0,
                code: code,
                prerequisites: [],
                title: title
            };
            setCourses([...courses, newCourse]);
        }
    };

    const removeCourse = (index: number) => {
        const updatedCourses = [...courses];
        updatedCourses.splice(index, 1);
        setCourses(updatedCourses);
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={true} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table>{/* ... (your course data) */}</table>
                    <h2>Course Table</h2>
                    <table>
                        {/* ... (your course data) */}
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={index}>
                                    <td>{course.code}</td>
                                    <td>{course.title}</td>
                                    <td>{course.credits}</td>
                                    <td>{course.prerequisites.join(", ")}</td>
                                    <td>
                                        <button
                                            onClick={() => removeCourse(index)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
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
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
