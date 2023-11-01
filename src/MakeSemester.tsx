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
            tot_creds: Number(semester.tot_creds) + Number(newCourse.credits)
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setSemester({ ...semester, [name]: value });
    };

    return (
        <div className="fade-in">
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Semester Title:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Semester title"
                                    value={semester.title}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                        <CourseEditor onAddCourse={addCourseToSemester} />
                    </Col>
                    <Col>
                        <h2>Semester Data</h2>
                        <p>Title: {semester.title}</p>
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
