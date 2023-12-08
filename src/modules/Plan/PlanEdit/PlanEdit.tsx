/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
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
    const [courses, setCourses] = useState<LocalCourse[]>(semester.courses);

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
                    {/* Existing Form and Course Display */}
                    <table>
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
