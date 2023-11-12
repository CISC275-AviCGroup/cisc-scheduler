import "./Introduction.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";

interface IntroProps {
    showplanner: () => void;
}

export const Introduction = ({ showplanner }: IntroProps) => {
    return (
        <div className="intro-container" id="introBox">
            <h2>Introduction to CISC Scheduler</h2>
            <br></br>
            <p>
                Embarking on your Computer and Information Sciences (CISC)
                degree journey is an exciting adventure filled with
                opportunities for growth and learning. Our Degree Plan Scheduler
                is designed to be your trusted companion, guiding you through
                the complexity of course selection and helping you chart a clear
                path towards your academic and career goals.
            </p>

            <br></br>

            <h5>Key Features:</h5>

            <ul>
                <li>
                    Multiple Plans
                    <p>
                        Seamlessly create, customize, and track multiple degree
                        paths within our platform, empowering you to explore
                        diverse academic pursuits and tailor your education to
                        your unique goals.
                    </p>
                </li>
                <li>
                    Prerequsites
                    <p>
                        Our degree planning feature now includes the ability to
                        set course prerequisites, allowing you to create a
                        well-structured academic roadmap. Define essential
                        requirements for each course, ensuring a cohesive and
                        personalized learning experience tailored to your
                        academic goals.
                    </p>
                </li>
                <li>
                    Export/Import Plans
                    <p>
                        Effortlessly import plans to access them across
                        platforms or export your curated educational roadmap for
                        easy sharing and collaborative planning. This feature
                        streamlines your degree planning experience, ensuring
                        accessibility and collaboration in shaping your academic
                        future.
                    </p>
                </li>
                <li>
                    Visualize Unfilled Course
                    <p>
                        Identify and track the remaining courses needed to
                        complete your degree plan, allowing for a comprehensive
                        overview and streamlined planning process. Stay
                        organized and make informed decisions with this valuable
                        feature that ensures you are always on the right track
                        toward achieving your academic goals.
                    </p>
                </li>
            </ul>

            <p>
                Thank you for choosing our scheduler application to navigate
                your academic journey. We are honored to be part of your
                educational experience, and we are committed to providing you
                wiht a powerfull tool to achieve your goals. If you have any
                have any feedback or questions, feel free to reach out. Best of
                of luck, and happy planning!
            </p>

            <br></br>

            <button id="closeIntroBtn" onClick={showplanner}>
                Start Planning
            </button>
        </div>
    );
};
export default Introduction;
