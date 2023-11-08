// Interface for plan, contains the semester
import { Semester } from "./semester";

export interface Plan {
    /** A unique identifier for the course (XXX) */
    title: string;
    /** The title of the course */
    body: string;
    // semesters in a plan
    semesters: Semester[];
    /** The credit count of a course */
    tot_creds: number;
}
