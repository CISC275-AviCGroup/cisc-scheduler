/* eslint-disable no-extra-parens */
import React from "react";
import { Plan } from "../../../interfaces/plan";
import { PlanView } from "../../Plan/PlanView/PlanView";

import "./PlanCard.css";

interface planCardProps {
    plan: Plan;
    handleClick: (planID: string) => void;
    handleDelete: (planID: string) => void;
    planPicked: string[];
    editPlan: (pTitle: string, newPlan: Plan) => void;
    deletePlan: (pTitle: string) => void;
    resetView: () => void;
}

export const PlanCard = ({
    plan,
    handleClick,
    handleDelete,
    planPicked,
    editPlan,
    deletePlan,
    resetView
}: planCardProps) => {
    return (
        <div
            className="plan_view_card"
            onClick={() => {
                handleClick(plan.title);
            }}
        >
            <div className="d-flex align-items-baseline">
                <h3
                    className="title"
                    /* onClick={() => {
                        handleClick(plan.title);
                    }} */
                >
                    {plan.title}
                </h3>
                <p>
                    {plan.semesters.length} semester
                    {plan.semesters.length !== 1 ? "s" : ""}
                </p>
            </div>
            <p>{plan.body}</p>
            {planPicked.includes(plan.title) && (
                <PlanView
                    plan={plan}
                    editPlan={editPlan}
                    deletePlan={deletePlan}
                    resetView={resetView}
                />
            )}
            <button
                className="delete_button"
                onClick={() => handleDelete(plan.title)}
            >
                Delete
            </button>
        </div>
    );
};
