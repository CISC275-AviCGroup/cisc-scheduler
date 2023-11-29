import React, { useState } from "react";
import { Plan } from "../../../interfaces/plan";

import { PlanExpanded } from "./PlanExpanded";
import { PlanEdit } from "../PlanEdit/PlanEdit";

/* import "./QuizView.css";
 */
interface PlanViewProps {
    plan: Plan;
    editPlan: (planTitle: string, plan: Plan) => void;
    deletePlan: (planTitle: string) => void;
    resetView: () => void;
}

export const PlanView = ({
    plan,
    editPlan,
    deletePlan,
    resetView
}: PlanViewProps) => {
    const [edit, setEdit] = useState(false);

    const switchEdit = () => {
        setEdit(!edit);
    };

    return (
        <div className="quiz_card">
            {edit && (
                <PlanEdit
                    quiz={quiz}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                    switchEdit={switchEdit}
                    resetView={resetView}
                ></PlanEdit>
            )}
            {!edit && (
                <PlanExpanded
                    quiz={quiz}
                    editQuiz={editQuiz}
                    resetView={resetView}
                    switchEdit={switchEdit}
                ></PlanExpanded>
            )}
        </div>
    );
};
