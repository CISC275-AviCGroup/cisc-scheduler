import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

interface addPlanModalProps {
    show: boolean;
    handleClose: () => void;
    addSemester: (title: string) => void;
}

export const AddSemesterModal = ({
    show,
    handleClose,
    addSemester
}: addPlanModalProps) => {
    const [title, setTitle] = useState<string>("Fall");
    const [year, setYear] = useState<string>("2023");

    const saveChanges = () => {
        addSemester(title);
        setTitle("Example Semester");
        setYear("2023");
        handleClose();
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formSemesterId">
                        <Form.Label>Semester: </Form.Label>
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
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setYear(event.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setTitle("Fall");
                            setYear("2023");
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
