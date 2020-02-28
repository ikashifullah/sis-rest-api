const COURSES = [
    {
        id: 1,
        name: 'Basic JavaScript',
        duration: '1 month',
        fee: 5000,
        startDate: '01/03/2020'
    },
    {
        id: 2,
        name: 'Advanced JavaScript',
        duration: '2 month',
        fee: 8000,
        startDate: '01/03/2020'
    },
    {
        id: 3,
        name: 'Angular 2 Ninja',
        duration: '2 month',
        fee: 10000,
        startDate: '01/03/2020'
    }
];

const STUDENTS = [
    {
        id: 1,
        name: 'Faisal Farooq',
        age: 20,
        class: '8th',
        section: 'A',
        address: 'Lahore, Pakistan',
        courseId: 1,
    },
    {
        id: 2,
        name: 'Yasir Farooq',
        age: 35,
        class: '12th',
        section: 'B',
        address: 'Lahore, Pakistan',
        courseId: 2,
    },
    {
        id: 3,
        name: 'Mutahir',
        age: 26,
        class: '11th',
        section: 'A',
        address: 'Lahore, Pakistan',
        courseId: 3,
    },
];

module.exports = {
    courses: COURSES,
    students: STUDENTS
};

    