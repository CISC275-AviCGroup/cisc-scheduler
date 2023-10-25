// Interface for the semester. Contains each of the classes that would be taken in a given semester, and total credits.

import { Course } from "./course";

export interface Semester {
    // title of the semester (season-year)
    title: string;
    // list of courses in a given semester
    courses: [Course];
    // total credits in a given semester
    tot_creds: number;
}
