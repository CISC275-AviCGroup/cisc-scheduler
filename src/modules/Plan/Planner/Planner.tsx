import React, { useState } from "react";
import { Plan } from "../../../interfaces/plan";
import { PlansList } from "../PlansList/PlansList";
import { AddPlanModal } from "../AddPlanModal/AddPlanModal";
import { ImportModal } from "../Import/Import";
import CoursesList from "../../CoursesList/CoursesList";

const sample_plan: Plan[] = [
    {
        title: "Data Science",
        body: "test plan",
        semesters: [
            {
                title: "Fall",
                year: "2023",
                courses: [
                    {
                        code: "108",
                        title: "CISC",
                        credits: 3,
                        prerequisites: []
                    },
                    {
                        code: "210",
                        title: "CISC",
                        credits: 3,
                        prerequisites: []
                    },
                    {
                        code: "350",
                        title: "CISC",
                        credits: 3,
                        prerequisites: []
                    }
                ],
                tot_creds: 9
            },
            {
                title: "Spring",
                year: "2024",
                courses: [
                    {
                        code: "38",
                        title: "CISC",
                        credits: 3,
                        prerequisites: []
                    },
                    {
                        code: "450",
                        title: "CISC",
                        credits: 3,
                        prerequisites: []
                    },
                    {
                        code: "923",
                        title: "CISC",
                        credits: 3,
                        prerequisites: []
                    }
                ],
                tot_creds: 9
            }
        ],
        tot_creds: 9
    }
];

export const Planners = () => {
    const [plans, setPlans] = useState<Plan[]>(sample_plan);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showImportModal, setShowImportModal] = useState(false);

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

    function savePlans() {
        // Convert list of dictionaries to a JSON string
        const jsonString = JSON.stringify(plans, null, 2); // 2 is for indentation

        // Create a Blob containing the JSON data
        const blob = new Blob([jsonString], { type: "text/plain" });

        // Create a temporary URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create a link element
        const link = document.createElement("a");
        link.href = url;
        link.download = "Saved_Plans";

        // Simulate a click to trigger the download
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }

    function importPlans(text: string) {
        try {
            const parsedData = JSON.parse(text);
            setPlans(parsedData);
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }

    const showImportfileModal = () => setShowImportModal(true);
    const closeImportModal = () => setShowImportModal(false);

    const handleShowModal = () => setShowAddModal(true);
    const handleCloseModal = () => setShowAddModal(false);

    return (
        <div className="planners">
            <PlansList
                plans={plans}
                editPlan={editPlan}
                deletePlan={deletePlan}
                showModal={handleShowModal}
                importModal={showImportfileModal}
                savePlan={savePlans}
            ></PlansList>
            <CoursesList />

            <ImportModal
                show={showImportModal}
                handleClose={closeImportModal}
                importPlans={importPlans}
            ></ImportModal>

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
