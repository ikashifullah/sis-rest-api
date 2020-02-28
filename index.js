const Joi = require('joi');
const express = require('express');
const { courses, students } = require('./mock-data');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Student Information System REST API');
});

// Get Students
app.get('/api/students', (req, res) => {
    res.send(students);
});

// Get a single student
app.get('/api/students/:id', (req, res) => {
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('The student with given ID is not found!');
    
    // Return Course details along with student
    student.course = courses.find((course) => course.id === student.courseId);
    res.send(student);
});

app.post('/api/students', (req, res) => {
    const { error } = validateStudent(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        class: req.body.class,
        section: req.body.section,
        address: req.body.address,
        courseId: req.body.courseId,
    };
    students.push(student);
    res.send(student);
});

app.put('/api/students/:id', (req, res) => {
    // Find the student or 404 error
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('The student with given ID is not found!');
    // Validate else 400 error
    const { error } = validateStudent(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    // Update the student
    student.name = req.body.name,
    student.age = req.body.age,
    student.class = req.body.class,
    student.section = req.body.section,
    student.address = req.body.address,
    student.courseId = req.body.courseId
    res.send(student);
});

app.delete('/api/students/:id', (req, res) => {
    // Find the requested student or 404 error
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('The student with given ID is not found!');

    // Find index and Delete
    const index = students.indexOf(student);
    students.splice(index, 1);

    // Return the deleted student
    res.send(student);
});

function validateStudent(student) {
    const schema = {
        name: Joi.string().min(3).required(),
        age: Joi.number().min(2).required(),
        class: Joi.string().min(3).required(),
        section: Joi.string().min(1).required(),
        address: Joi.string().min(3).required(),
        courseId: Joi.number().required()
    };
    return Joi.validate(student, schema);
}
// --- Course Routings Starts Here ----- //
// Get Courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Get a single course
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with given ID is not found!');
    
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name,
        duration: req.body.duration,
        fee: req.body.fee,
        startDate: req.body.startDate
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // Find the course or 404 error
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with given ID is not found!');
    // Validate else 400 error
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    // Update the course
    course.name = req.body.name;
    course.duration = req.body.duration;
    course.fee = req.body.fee;
    course.startDate = req.body.startDate;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // Find the requested course or 404 error
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with given ID is not found!');

    // Find index and Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the deleted course
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required(),
        duration: Joi.string().min(3).required(),
        fee: Joi.number().min(3).required(),
        startDate: Joi.date().required()
    };
    return Joi.validate(course, schema);
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listening at port ${port} ...`)});