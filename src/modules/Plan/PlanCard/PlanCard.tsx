import React from "react";
import { Plan } from "../../../interfaces/plan";

import "./PlanCard.css";

interface planCardProps {
    plan: Plan;
    handleClick: (planID: string) => void;
    handleDelete: (planID: string) => void;
}

export const PlanCard = ({
    plan,
    handleClick,
    handleDelete
}: planCardProps) => {
    return (
        <div className="plan_view_card">
            <div className="d-flex align-items-baseline">
                <h3
                    className="title"
                    onClick={() => {
                        handleClick(plan.title);
                    }}
                >
                    {plan.title}
                </h3>
                <p>
                    {plan.semesters.length} semester
                    {plan.semesters.length !== 1 ? "s" : ""}
                </p>
            </div>
            <p>{plan.body}</p>
            <button
                className="delete_button"
                onClick={() => handleDelete(plan.title)}
            >
                Delete
            </button>
        </div>
    );
};
