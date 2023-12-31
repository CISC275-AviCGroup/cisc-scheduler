/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../../../interfaces/semester";
import { Plan } from "../../../interfaces/plan";
import { AddSemesterModal } from "../../AddSemesterModal/AddSemesterModal";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import { QuestionEdit } from "../../../QuestionEdit";

import { EditSemesterModal } from "../../Plan/PlanEdit/PlanEdit";
import "./PlanExpanded.css";
import Semesters from "../../Semesters/Semesters";
//import { QuizQuestion } from "./QuizQuestion";

interface planExpandedProps {
    plan: Plan;
    editPlan: (planTitle: string, plan: Plan) => void;
    deletePlan: (SemesterTitle: string) => void;
    resetView: () => void;
    switchEdit: () => void;
}

type EditModalState = {
    [key: string]: boolean;
};

export const PlanExpanded = ({
    plan,
    editPlan,
    resetView,
    switchEdit
}: planExpandedProps) => {
    /* const [p, sp] = useState<number>(0);
    const [submitArr, setSubmitArr] = useState<boolean[]>(
        new Array(filteredQuestions.length)
    ); */

    const [openSemesters, setOpenSemesters] = useState<string[]>([]);

    const handleSemesterClick = (title: string) => {
        setOpenSemesters((openSemesters) =>
            openSemesters.includes(title)
                ? openSemesters.filter((semTitle) => semTitle !== title)
                : [...openSemesters, title]
        );
    };

    const handleEditSemester = (title: string) => {
        return;
    };

    function addSemester(title: string, year: string) {
        const newSemester: Semester = {
            title: title,
            year: year,
            courses: [],
            tot_creds: 0
        };

        // Update the plan with the new semester
        editPlan(plan.title, {
            ...plan,
            semesters: [...plan.semesters, newSemester]
        });

        // Close the modal or perform any other necessary actions
        handleCloseModal();
    }

    const deletePlan = (semesterTitle: string) => {
        const updatedSemesters = plan.semesters.filter(
            (s: Semester): boolean => semesterTitle !== s.title
        );

        // Assuming you are using React Hooks to manage state
        // Update the state with the new array
        editPlan(plan.title, { ...plan, semesters: updatedSemesters });
    };
    const [showAddModal, setShowAddModal] = useState(false);

    const handleShowModal = () => setShowAddModal(true);
    const handleCloseModal = () => setShowAddModal(false);

    const [showEditModal, setShowEditModal] = useState<EditModalState>({}); // Object to track modals per semester

    const handleEditshowModal = (semesterTitle: string) => {
        setShowEditModal((prevState) => ({
            ...prevState,
            [semesterTitle]: true // Set the modal for the specified semester to true
        }));
    };

    const handleEditcloseModal = (semesterTitle: string) => {
        setShowEditModal((prevState) => ({
            ...prevState,
            [semesterTitle]: false // Set the modal for the specified semester to false
        }));
    };

    const handleSaveChanges = (
        semesterTitle: string,
        updatedSemester: Semester
    ) => {
        // Find the index of the semester to be updated
        const semesterIndex = plan.semesters.findIndex(
            (semester) => semester.title === semesterTitle
        );

        if (semesterIndex !== -1) {
            // Create a new array with the updated semester
            const updatedSemesters = [...plan.semesters];
            updatedSemesters[semesterIndex] = updatedSemester;

            // Update the plan with the modified semester
            editPlan(plan.title, {
                ...plan,
                semesters: updatedSemesters
            });

            // Close the modal or perform any other necessary actions
            handleEditcloseModal(semesterTitle);
        }
    };

    return (
        <>
            <button
                onClick={(event) => {
                    event.stopPropagation(); // Prevent propagation
                    handleShowModal();
                }}
                style={{ marginTop: "15px" }}
            >
                Add Semester
            </button>
            <AddSemesterModal
                show={showAddModal}
                handleClose={handleCloseModal}
                addSemester={(title: string, year: string) =>
                    addSemester(title, year)
                }
            ></AddSemesterModal>

            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "15px", textAlign: "center" }}>
                            Semester
                        </th>
                        <th
                            style={{
                                paddingLeft: "485px",
                                textAlign: "center"
                            }}
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {plan.semesters.map((semester) => (
                        <tr key={semester.title}>
                            <td
                                style={{
                                    padding: "10px"
                                }}
                            >
                                <h2
                                    onClick={() =>
                                        handleSemesterClick(semester.title)
                                    }
                                >
                                    {semester.title + " " + semester.year}
                                </h2>
                                {openSemesters.includes(semester.title) && (
                                    <ul>
                                        {semester.courses.map(
                                            (course, index) => (
                                                <li
                                                    className="courseTable"
                                                    key={index}
                                                >
                                                    {course.code +
                                                        ": " +
                                                        course.title +
                                                        " - " +
                                                        course.credits +
                                                        " Credits"}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                                <h4
                                    style={{
                                        fontSize: "15px",
                                        marginTop: "0px"
                                    }}
                                >
                                    {"Total Credits: " + semester.tot_creds}
                                </h4>
                            </td>
                            <td
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "450px"
                                }}
                            >
                                <button
                                    className="edit_btn"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleEditshowModal(semester.title);
                                    }}
                                    style={{
                                        marginRight: "10px",
                                        marginLeft: "50px"
                                    }}
                                >
                                    Edit
                                </button>

                                <EditSemesterModal
                                    semester={semester}
                                    show={
                                        showEditModal[semester.title] || false
                                    }
                                    handleClose={() =>
                                        handleEditcloseModal(semester.title)
                                    }
                                    saveChanges={(updatedSemester: Semester) =>
                                        handleSaveChanges(
                                            semester.title,
                                            updatedSemester
                                        )
                                    }
                                ></EditSemesterModal>

                                <button
                                    className="delete_btn"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        deletePlan(semester.title);
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
