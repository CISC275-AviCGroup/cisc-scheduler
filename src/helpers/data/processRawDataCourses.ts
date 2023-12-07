import { DataCourse } from "../../interfaces/DataCourse";
import { DataCourses } from "../../interfaces/DataCourses";
import { RawDataCourses } from "../../interfaces/RawDataCourses";

export const processRawDataCourses = (
    rawDataCourses: RawDataCourses
): DataCourses => {
    const convertedData: { [key: string]: object } = {};
    for (const eachKey in rawDataCourses) {
        const courses = Object.keys(rawDataCourses[eachKey]);
        convertedData[eachKey] = courses.map(
            (e) => (rawDataCourses[eachKey] as { [key: string]: DataCourse })[e]
        );
    }

    return convertedData as unknown as DataCourses;
};
