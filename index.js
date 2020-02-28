const express = require('express');
const courses = require('./mock-data');
const app = express();

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

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listening at port ${port} ...`)});