// Interface for the school year. Contains 2 semesters of the given year.

import { Semester } from "./semester";

export interface Year {
    curryear: string;
    // The year
    season: string;
    // list of semesters in a given year
    semesters: Semester[];
    // Total credits in a given year
    tot_creds: number;
}
