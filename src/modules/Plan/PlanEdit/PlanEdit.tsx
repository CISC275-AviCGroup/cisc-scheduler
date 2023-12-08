/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Semester } from "../../../interfaces/semester";
import { LocalCourse } from "../../../interfaces/LocalCourse";

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
    const [courses, setCourses] = useState<LocalCourse[]>([]);
    const [totCreds, setTotCreds] = useState<number>(0);

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
