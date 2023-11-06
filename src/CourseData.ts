const courseData = [
    {
        name: "INTRODUCTION TO COMPUTER SCIENCE I",
        code: "CISC 108",
        prerequisites: []
    },
    {
        name: "INTRODUCTION TO COMPUTER SCIENCE II",
        code: "CISC 181",
        prerequisites: ["CISC 108 or CISC 106"]
    },
    {
        name: "Introduction to Systems Programming",
        code: "CISC 210",
        prerequisites: ["CISC 108"]
    },
    {
        name: "DATA STRUCTURES",
        code: "CISC 220",
        prerequisites: [" CISC 210"]
    },

    {
        name: "MACHINE ORGANIZATION AND ASSEMBLY LANGUAGE",
        code: "CISC 260",
        prerequisites: [" CISC 181"]
    },
    {
        name: " INTRODUCTION TO SOFTWARE ENGINEERING",
        code: "CISC 275",
        prerequisites: ["CISC 220"]
    },
    {
        name: "AUTOMATA THEORY",
        code: "CISC 303",
        prerequisites: ["MATH210 and CISC220"]
    },
    {
        name: "LOGIC AND PROGRAMMING",
        code: "CISC 304",
        prerequisites: ["MATH210 and CISC220"]
    },
    {
        name: "INTRODUCTION TO ALGORITHMS",
        code: "CISC 320",
        prerequisites: ["MATH210 and CISC220"]
    },
    {
        name: "INTRODUCTION TO ALGORITHMS",
        code: "CISC 320",
        prerequisites: ["MATH210 and CISC220"]
    },
    {
        name: "COMPUTERS, ETHICS AND SOCIETY",
        code: "CISC 355",
        prerequisites: []
    },
    {
        name: "INTRODUCTION TO ALGORITHMS",
        code: "CISC 320",
        prerequisites: ["MATH210 and CISC220"]
    },
    {
        name: "OPERATING SYSTEMS",
        code: "CISC 361",
        prerequisites: [" CISC220 and CISC 260"]
    },
    {
        name: "PARALLEL PROGRAMMING",
        code: "CISC 372",
        prerequisites: ["CISC220"]
    },
    {
        name: "CISC 498 COMPUTER SCIENCE SENIOR DESIGN PROJECT I",
        code: "CISC 498",
        prerequisites: ["CISC275 and CISC320"]
    },
    {
        name: "CISC 499 COMPUTER SCIENCE SENIOR DESIGN PROJECT II",
        code: "CISC 499",
        prerequisites: ["CISC 498"]
    }
];

export default courseData;
