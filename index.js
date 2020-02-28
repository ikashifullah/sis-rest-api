const Joi = require('joi');
const express = require('express');
const courses = require('./mock-data');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Student Information System REST API');
});

// Get Courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Get a single course
app.get('/api/courses/:id', (req, res) => {
    const course = courses.courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given ID is not found!');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.courses.length + 1,
        name: req.body.name,
        duration: req.body.duration,
        fee: req.body.fee,
        startDate: req.body.startDate
    };
    courses.courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // Find the course or 404 error
    const course = courses.courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given ID is not found!');
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