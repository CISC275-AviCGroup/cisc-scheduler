// Interface for each course. Contains info like credits, grades, and etc.

export interface Course {
    /** A unique identifier for the course (XXX) */
    code: number;
    /** The title of the course */
    title: string;
    /** The credit count of a course */
    credits: number;
}
