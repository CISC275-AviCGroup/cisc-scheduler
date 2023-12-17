import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CourseEditor } from "./CourseEditor";

describe("CourseEditor", () => {
    test("submitting the form with valid data calls onAddCourse", () => {
        const mockOnAddCourse = jest.fn();
        const { getByPlaceholderText, getByText } = render(
            <CourseEditor onAddCourse={mockOnAddCourse} />
        );

        const codeInput = getByPlaceholderText("Course code");
        const titleInput = getByPlaceholderText("Course title");
        const creditsInput = getByPlaceholderText("Credits");
        const submitButton = getByText("Submit");

        fireEvent.change(codeInput, { target: { value: "ABC123" } });
        fireEvent.change(titleInput, { target: { value: "Test Course" } });
        fireEvent.change(creditsInput, { target: { value: "3" } });

        fireEvent.click(submitButton);

        expect(mockOnAddCourse).toHaveBeenCalledWith({
            code: "ABC123",
            title: "Test Course",
            credits: "3",
            prerequisites: []
        });
    });

    test("submitting the form with invalid data does not call onAddCourse", () => {
        const mockOnAddCourse = jest.fn();
        const { getByText } = render(
            <CourseEditor onAddCourse={mockOnAddCourse} />
        );

        const submitButton = getByText("Submit");

        fireEvent.click(submitButton);

        expect(mockOnAddCourse).not.toHaveBeenCalled();
    });
});
