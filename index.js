const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Student Information System REST API');
});

app.listen(3000, () => { console.log('listening at port 3000 ...')});