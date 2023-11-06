// Interface for each course. Contains info like credits, grades, and etc.

import { StringArraySupportOption } from "prettier";

export interface Course {
    /** A unique identifier for the course (XXX) */
    code: string;
    /** The title of the course */
    title: string;
    /** The credit count of a course */
    credits: string;
    /**
     * The pre-requisities of the course, contain `<ABBREVIATION> <CODE>`
     */
    prerequisites: string[];
}
