// Interface for each course. Contains info like credits, grades, and etc.

/**
 * Represents the type of the data being pulled in
 */
export interface DataCourse {
    /**
     * A unique identifier for the course (XXX)
     */
    code: string;

    /**
     * The name of the course
     */
    name: string;

    /**
     * The course description
     */
    descr: string;

    /**
     * The credits of the course
     */
    credits: string;

    /**
     * The pre requisites of the course
     */
    preReq: string;

    /**
     * The restricted electives of the course
     */
    restrict: string;

    /**
     * The breadth requirements this course satisfies
     */
    breadth: string;

    /**
     * The season(s) this course is offered in
     */
    typ: string;
}
