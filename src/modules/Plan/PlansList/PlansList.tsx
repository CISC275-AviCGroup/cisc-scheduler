/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../../../interfaces/plan";
import { PlanCard } from "../PlanCard/PlanCard";
import "./PlansList.css";

//import { PlanView } from "../../Plan/PlanView/PlanView";

interface plansListProps {
    plans: Plan[];
    editPlan: (pTitle: string, newPlan: Plan) => void;
    deletePlan: (pTitle: string) => void;
    showModal: () => void;
    savePlan: () => void;
    importModal: () => void;
}

export const PlansList = ({
    plans,
    editPlan,
    deletePlan,
    showModal,
    savePlan,
    importModal
}: plansListProps) => {
    const [planID, setPlanID] = useState<string[]>([]);
    const [showPlan, setShowPlan] = useState<boolean>(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleShowPlan = () => {
        setShowPlan(!showPlan);
    };

    const handlePlanView = (title: string) => {
        handleShowPlan;
        if (planID.includes(title)) {
            // If title exists, remove it from the array
            const updatedPlanID = planID.filter((id) => id !== title);
            setPlanID(updatedPlanID);
        } else {
            // If title doesn't exist, add it to the array
            setPlanID([...planID, title]);
        }
        //setPlanID([...planID, title]);
    };

    const resetPlanView = () => {
        setPlanID([]);
    };

    return (
        <div className="plan_list">
            <div className="plan_list">
                <Button className="import_btn" onClick={importModal}>
                    Import
                </Button>
                <Button className="save_btn" onClick={savePlan}>
                    Save
                </Button>
                {plans.map((plan: Plan) => (
                    <div key={plan.title}>
                        <PlanCard
                            plan={plan}
                            handleClick={handlePlanView}
                            handleDelete={deletePlan}
                            planPicked={planID}
                            editPlan={editPlan}
                            deletePlan={deletePlan}
                            resetView={() => resetPlanView()}
                        />
                        {/* {planID === plan.title && (
                            <PlanView
                                plan={plan}
                                editPlan={editPlan}
                                deletePlan={deletePlan}
                                resetView={() => resetPlanView()}
                            />
                        )} */}
                    </div>
                ))}
                <Button className="add_btn_plan" onClick={showModal}>
                    Add New Plan
                </Button>
            </div>

            {/* {plans.map((plan: Plan) => {
                if (planID === plan.title) {
                    return (
                        <PlanView
                            key={plan.title}
                            plan={plan}
                            editPlan={editPlan}
                            deletePlan={deletePlan}
                            resetView={resetPlanView}
                        ></PlanView>
                    );
                } else {
                    return;
                }
            })*/}
        </div>
    );
};
