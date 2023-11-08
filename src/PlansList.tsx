/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "./interfaces/plan";
import { PlanCard } from "./PlanCard";
import "./PlansList.css";

//import { QuizView } from "./QuizView";

interface plansListProps {
    plans: Plan[];
    editPlan: (pTitle: string, newPlan: Plan) => void;
    deletePlan: (pTitle: string) => void;
    showModal: () => void;
}

export const PlansList = ({
    plans,
    editPlan,
    deletePlan,
    showModal
}: plansListProps) => {
    const [planID, setPlanID] = useState<null | string>(null);

    const handlePlanView = (title: string) => {
        setPlanID(title);
    };

    const resetPlanView = () => {
        setPlanID(null);
    };

    return (
        <div className="plan_list">
            <>
                {plans.map((plan: Plan) => (
                    <PlanCard
                        key={plan.title}
                        plan={plan}
                        handleClick={handlePlanView}
                    ></PlanCard>
                ))}
                <Button className="add_btn" onClick={showModal}>
                    Add New Quiz
                </Button>
            </>
            {/* 
            {quizzes.map((quiz: Quiz) => {
                if (displayId === quiz.id) {
                    return (
                        <PlanCard
                            key={quiz.id}
                            quiz={quiz}
                            editQuiz={editQuiz}
                            deleteQuiz={deleteQuiz}
                            resetView={resetQuizView}
                        ></PlanCard>
                    );
                }
                return null;
            })} */}
        </div>
    );
};
