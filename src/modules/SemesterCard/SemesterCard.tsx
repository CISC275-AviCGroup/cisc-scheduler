import React from "react";
import { Semester } from "../../interfaces/semester";
import "./SemesterCard.css";
import { Button } from "react-bootstrap";
import { Course } from "../../interfaces/course";

interface semesterCardProps {
    semester: Semester;
    //handleClick: (planID: string) => void;
    handleDelete: (planID: string) => void;
}

export const SemesterCard = ({
    semester,
    //handleClick,
    handleDelete
}: semesterCardProps) => {
    return (
        <div className="semester_view_card">
            <div className="d-flex align-items-baseline">
                <h3
                    className="title"
                    /*                     onClick={() => {
                        handleClick(semester.title);
                    }} */
                >
                    {semester.title}
                </h3>
                <p>
                    {semester.courses.length} courses
                    {semester.tot_creds} credits
                </p>
            </div>
            {semester.courses.map(
                (course: Course) =>
                    course.title + course.code + " - " + course.credits
            )}
            <Button
                className="delete_button"
                onClick={() => handleDelete(semester.title)}
            >
                Delete
            </Button>
        </div>
    );
};
