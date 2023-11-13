import React from "react";
import { Plan } from "./interfaces/plan";

import "./PlanCard.css";

interface PlanViewProps {
    plan: Plan;
    editPlan: (plan: Plan) => void;
    deletePlan: (planId: string) => void;
    resetView: () => void;
}

export const PlanView = ({
    plan,
    editPlan,
    deletePlan,
    resetView
}: PlanViewProps) => {
    return (
        <div className="plan_view_card">
            <h2>{plan.title}</h2>
            <p>{plan.body}</p>
            <p>Semesters: {plan.semesters.length}</p>
            <button onClick={() => editPlan(plan)}>Edit Plan</button>
            <button onClick={() => deletePlan(plan.title)}>Delete Plan</button>
            <button onClick={resetView}>Close</button>
        </div>
    );
};
