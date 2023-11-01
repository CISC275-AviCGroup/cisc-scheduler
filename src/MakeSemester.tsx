import React, { useState } from "react";
import { Semester } from "./interfaces/semester";
import { CourseEditor } from "./CourseEditor";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Course } from "./interfaces/course";
import "./App.css";

export function MakeSemester(): JSX.Element {
    const [semester, setSemester] = useState<Semester>({
        title: "",
        courses: [],
        tot_creds: 0
    });

    const addCourseToSemester = (newCourse: Course) => {
        setSemester({
            ...semester,
            courses: [...semester.courses, newCourse],
            tot_creds: Number(semester.tot_creds) + Number(newCourse.credits),
            title: semester.title
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setSemester({ ...semester, [name]: value });
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Semester Title:</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="title"
                                    onChange={handleChange}
                                    id="Title-check-Fall"
                                    label="Fall"
                                    value="Fall"
                                    checked={semester.title === "Fall"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="title"
                                    onChange={handleChange}
                                    id="Title-check-Winter"
                                    label="Winter"
                                    value="Winter"
                                    checked={semester.title === "Winter"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="title"
                                    onChange={handleChange}
                                    id="Title-check-Spring"
                                    label="Spring"
                                    value="Spring"
                                    checked={semester.title === "Spring"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="title"
                                    onChange={handleChange}
                                    id="Title-check-Summer"
                                    label="Summer"
                                    value="Summer"
                                    checked={semester.title === "Summer"}
                                />
                            </Form.Group>
                        </Form>
                        <CourseEditor onAddCourse={addCourseToSemester} />
                    </Col>
                    <Col>
                        <h2>Semester Data</h2>
                        <p>Semester: {semester.title}</p>
                        <p>Credits: {semester.tot_creds}</p>
                        <h3>Courses:</h3>
                        <ul className="noBulletsUL">
                            {semester.courses.map((course, index) => {
                                return (
                                    <li key={index}>
                                        {course.code} - {course.title}
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MakeSemester;
