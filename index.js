const express = require('express');
const courses = require('./mock-data');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Student Information System REST API');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listening at port ${port} ...`)});