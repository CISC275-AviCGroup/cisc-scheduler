/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../../../interfaces/semester";
import { Plan } from "../../../interfaces/plan";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import { QuestionEdit } from "../../../QuestionEdit";

import "./PlanExpanded.css";
//import { QuizQuestion } from "./QuizQuestion";

interface planExpandedProps {
    plan: Plan;
    editPlan: (planTitle: string, plan: Plan) => void;
    deletePlan: (planTitle: string) => void;
    resetView: () => void;
    switchEdit: () => void;
}

export const PlanExpanded = ({
    plan,
    editPlan,
    deletePlan,
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

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th style={{ paddingLeft: "8px" }}>Semesters</th>
                        <th style={{ paddingLeft: "80px" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {plan.semesters.map((semester: Semester) => (
                        <tr key={semester.title}>
                            <td
                                onClick={() =>
                                    handleSemesterClick(semester.title)
                                }
                                style={{ padding: "12px" }}
                            >
                                {semester.title}
                            </td>
                            <td>
                                <button
                                    className="add_btn"
                                    onClick={() =>
                                        handleEditSemester(semester.title)
                                    }
                                    style={{ alignItems: "right" }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="add_btn"
                                    onClick={() => deletePlan(semester.title)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Display courses for the selected semesters */}
            {plan.semesters.map((semester) => (
                <div key={semester.title}>
                    <h2 onClick={() => handleSemesterClick(semester.title)}>
                        {semester.title}
                    </h2>
                    {openSemesters.includes(semester.title) && (
                        <ul>
                            {semester.courses.map((course, index) => (
                                <li key={index}>
                                    {course.title + course.code}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    );
};