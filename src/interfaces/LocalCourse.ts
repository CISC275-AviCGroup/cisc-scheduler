/**
 * Course type within the app, from processing the data and mapping it to a type
 */
export type LocalCourse = {
    /**
     * The # of credits in the course
     */
    credits: number;
    /**
     * The code of the course
     */
    code: string;
    /**
     * The list of pre-requisites of the course
     */
    prerequisites: string[];
    /**
     * The title of the course
     */
    title: string;
};
