import React, { useState, ChangeEvent } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Import.css";

interface ImportProps {
    show: boolean;
    handleClose: () => void;
    importPlans: (data: string) => void;
}

export const ImportModal = ({
    show,
    handleClose,
    importPlans
}: ImportProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null); // Specify the type for selectedFile

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedFile(file);
            // Handle file processing or other actions here if needed
        }
    };

    const handleImport = () => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target) {
                    const fileData = event.target.result as string;
                    handleClose(); // Close the modal
                    importPlans(fileData); // Pass the fileData to importPlans function
                }
            };
            reader.readAsText(selectedFile);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Import File</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="file" onChange={handleFileChange} />
                {/* Additional content or instructions can be added here */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        // Handle the selected file for import
                        // For example: send it to an API or process it further
                        handleImport();
                        handleClose();
                    }}
                >
                    Import
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
