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
    const schema = {
        name: Joi.string().min(3).required(),
        duration: Joi.string().min(3).required(),
        fee: Joi.number().min(3).required(),
        startDate: Joi.date().required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
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

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listening at port ${port} ...`)});