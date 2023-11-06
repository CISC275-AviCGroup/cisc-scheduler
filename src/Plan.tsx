import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Year } from "./interfaces/school_year";
import { Semester } from "./interfaces/semester";
import { MakeSemester } from "./MakeSemester";
import "./Plan.css";

export function Plan(): JSX.Element {
    const [year, setYear] = useState<Year>({
        curryear: "",
        season: "",
        semesters: [],
        tot_creds: 0
    });

    const addSemesterToYear = (newSemester: Semester) => {
        setYear({
            ...year,
            curryear: year.curryear,
            semesters: [...year.semesters, newSemester],
            tot_creds: Number(year.tot_creds) + Number(newSemester.tot_creds),
            season: year.season
        });
    };

    return (
        <span className="fade-in">
            <Container>
                <Row>
                    <Col>
                        <MakeSemester onAddSemester={addSemesterToYear} />
                    </Col>
                    <Col>
                        <h2>School Year:</h2>
                        <p>
                            {year.season} - {year.curryear}
                        </p>
                        <p>Credits: {year.tot_creds}</p>
                        <h3>Courses:</h3>
                        <ul className="HoriontalList">
                            {year.semesters.map((semester, index) => {
                                return (
                                    <li key={index}>
                                        <span>
                                            {semester.title} - Credits:{" "}
                                            {semester.tot_creds}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </span>
    );
}

export default Plan;
