/* eslint-disable no-extra-parens */
import React from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import "./PlansList.css";
import { SemesterCard } from "./SemesterCard/SemesterCard";

interface SemesterListProps {
    semesters: Semester[];
    //editSemester: (sTitle: string, newSemester: Semester) => void;
    deleteSemester: (sTitle: string) => void;
    showModal: () => void;
}

export const SemesterList = ({
    semesters,
    //editSemester,
    deleteSemester,
    showModal
}: SemesterListProps) => {
    //const [semesterID, setSemesterID] = useState<null | string>(null);

    /*     const handleSemesterView = (title: string) => {
        setSemesterID(title);
    }; */

    /*const resetSemesterView = () => {
        setSemesterID(null);
    };*/
    return (
        <div className="semester_list">
            {semesters.map((semester: Semester) => (
                <SemesterCard
                    key={semester.title}
                    semester={semester}
                    //handleClick={handleSemesterView}
                    handleDelete={deleteSemester}
                ></SemesterCard>
            ))}
            <Button className="add_btn" onClick={showModal}>
                Add New Semester
            </Button>
        </div>
    );
};
