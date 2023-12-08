import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface EditSemesterModalProps {
    show: boolean;
    handleClose: () => void;
}

export const EditSemesterModal = ({
    show,
    handleClose
}: EditSemesterModalProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [title, setTitle] = useState<string>("hi");
    //const [year, setYear] = useState<string>("hi");

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
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
