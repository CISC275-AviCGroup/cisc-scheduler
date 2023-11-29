import "../Plan.module.css";
import React, { useState } from "react";
import { Plan } from "../../../interfaces/plan";
import { PlansList } from "../PlansList/PlansList";
import { AddPlanModal } from "../AddPlanModal/AddPlanModal";

const sample_plan: Plan[] = [
    {
        title: "Data Science",
        body: "test plan",
        semesters: [
            {
                title: "Fall 2024",
                courses: [
                    {
                        code: "108",
                        title: "CISC",
                        credits: "3",
                        prerequisites: []
                    }
                ],
                tot_creds: 3
            }
        ],
        tot_creds: 3
    }
];

export const Planners = () => {
    const [plans, setPlans] = useState<Plan[]>(sample_plan);
    const [showAddModal, setShowAddModal] = useState(false);

    function editPlan(pTitle: string, newPlan: Plan) {
        setPlans(
            plans.map((p: Plan): Plan => (p.title === pTitle ? newPlan : p))
        );
    }

    function addPlan(title: string, body: string) {
        const newPlan: Plan = {
            title: title,
            body: body,
            semesters: [],
            tot_creds: 0
        };
        setPlans([...plans, newPlan]);
    }

    function deletePlan(pTitle: string) {
        setPlans(plans.filter((p: Plan): boolean => pTitle !== p.title));
    }

    const handleShowModal = () => setShowAddModal(true);
    const handleCloseModal = () => setShowAddModal(false);

    return (
        <div className="planners">
            <PlansList
                plans={plans}
                editPlan={editPlan}
                deletePlan={deletePlan}
                showModal={handleShowModal}
            ></PlansList>

            <AddPlanModal
                show={showAddModal}
                handleClose={handleCloseModal}
                addPlan={addPlan}
            ></AddPlanModal>
            <hr />
        </div>
    );
};
export default Planners;
