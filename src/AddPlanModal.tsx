import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

interface addPlanModalProps {
    show: boolean;
    handleClose: () => void;
    addPlan: (title: string, body: string) => void;
}

export const AddPlanModal = ({
    show,
    handleClose,
    addPlan
}: addPlanModalProps) => {
    const [title, setTitle] = useState<string>("Example Plan");
    const [body, setBody] = useState<string>("Example Description");

    const saveChanges = () => {
        addPlan(title, body);
        setTitle("Example Plan");
        setBody("Example Description");
        handleClose();
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formPlanId">
                        <Form.Label>Title: </Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(e.target.value)}
                        ></Form.Control>
                        <Form.Label>Description: </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={body}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setBody(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setTitle("Example Plan");
                            setBody("Example Description");
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
