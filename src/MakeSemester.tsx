import React, { useState } from "react";
import { Semester } from "./interfaces/semester";
import { CourseEditor } from "./CourseEditor";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Course } from "./interfaces/course";
import "./MakeSemester.css";
import "./App.css";

interface MakeSemesterProps {
    onAddSemester: (newSemester: Semester) => void;
}

export const MakeSemester: React.FC<MakeSemesterProps> = ({
    onAddSemester
}) => {
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
    const removeCourseFromSemester = (courseToRemove: Course) => {
        const updatedCourses = semester.courses.filter(
            (course) => course !== courseToRemove
        );
        setSemester({
            ...semester,
            courses: updatedCourses,
            tot_creds: semester.tot_creds - Number(courseToRemove.credits)
        });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setSemester({ ...semester, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onAddSemester(semester);
        setSemester({
            title: "",
            courses: [],
            tot_creds: 0
        });
    };

    return (
        <span className="fade-in">
            <CourseEditor onAddCourse={addCourseToSemester} />
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Add Course:</Form.Label>
                                <Form.Check
                                    type="radio"
                                    name="title"
                                    onChange={handleChange}
                                    id="Title-check-Fall"
                                    label="🍂 Fall"
                                    value=" Fall"
                                    checked={semester.title === "Fall"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="title"
                                    onChange={handleChange}
                                    id="Title-check-Winter"
                                    label="❄️ Winter"
                                    value="Winter"
                                    checked={semester.title === "Winter"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="title"
                                    onChange={handleChange}
                                    id="Title-check-Spring"
                                    label=" 🌸 Spring"
                                    value="Spring"
                                    checked={semester.title === "Spring"}
                                />
                                <Form.Check
                                    type="radio"
                                    name="title"
                                    onChange={handleChange}
                                    id="Title-check-Summer"
                                    label="☀️ Summer"
                                    value="Summer"
                                    checked={semester.title === "Summer"}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <h2>Semester Data:</h2>
                        <p>Semester: {semester.title}</p>
                        <p>Credits: {semester.tot_creds}</p>
                        <h3>Courses:</h3>
                        <ol className="noBulletsUL">
                            {semester.courses.map((course, index) => {
                                return (
                                    <li key={index}>
                                        {course.code} - {course.title}
                                        <Button
                                            onClick={() =>
                                                removeCourseFromSemester(course)
                                            }
                                        >
                                            Remove
                                        </Button>
                                    </li>
                                );
                            })}
                        </ol>
                        <Form onSubmit={handleSubmit}>
                            <Button type="submit">Add to Plan</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </span>
    );
};

export default MakeSemester;
