import "./Semester.css";
import React, { useState } from "react";
import { Semester } from "../../interfaces/semester";
import { SemesterList } from "../SemesterList";
import { AddSemesterModal } from "../AddSemesterModal/AddSemesterModal";

const sample_Semester: Semester[] = [
    {
        title: "Fall 2023",
        courses: [
            {
                code: "108",
                title: "CISC",
                credits: "3",
                prerequisites: []
            }
        ],
        tot_creds: 3
    }
];

export const Semesters = () => {
    const [semesters, setSemesters] = useState<Semester[]>(sample_Semester);
    const [showAddModal, setShowAddModal] = useState(false);

    /*function editSemester(sTitle: string, newSemester: Semester) {
        setSemesters(
            semesters.map(
                (s: Semester): Semester =>
                    s.title === sTitle ? newSemester : s
            )
        );
    }*/

    function addSemester(title: string) {
        const newSemester: Semester = {
            title: title,
            courses: [],
            tot_creds: 0
        };
        setSemesters([...semesters, newSemester]);
    }

    function deleteSemester(sTitle: string) {
        setSemesters(
            semesters.filter((s: Semester): boolean => sTitle !== s.title)
        );
    }

    const handleShowModal = () => setShowAddModal(true);
    const handleCloseModal = () => setShowAddModal(false);

    return (
        <div className="semesters">
            <SemesterList
                semesters={semesters}
                //editSemester={editSemester}
                deleteSemester={deleteSemester}
                showModal={handleShowModal}
            ></SemesterList>

            <AddSemesterModal
                show={showAddModal}
                handleClose={handleCloseModal}
                addSemester={addSemester}
            ></AddSemesterModal>
            <hr />
        </div>
    );
};
export default Semesters;
