const courseData = [
    {
        name: "Introduction to Computer Science I",
        code: "CISC 108",
        prerequisites: []
    },
    {
        name: "Introduction to Computer Science II",
        code: "CISC 181",
        prerequisites: ["CISC 108"]
    },
    {
        name: "Introduction to Systems Programming",
        code: "CISC 210",
        prerequisites: ["CISC 108, CISC 181"]
    },
    {
        name: "Data Structures",
        code: "CISC 220",
        prerequisites: ["CISC 108, CISC 181, CISC 210"]
    },

    {
        name: " Introduction of Software Engineering",
        code: "Cisc 275",
        prerequisites: ["CISC 108, CISC 181, CISC 210"]
    }
    // Add more courses here.
    // We will need more info on all of these including what each course is a  prerequisite for.
];

export default courseData;
