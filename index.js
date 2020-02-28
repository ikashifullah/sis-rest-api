const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Student Information System REST API');
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listening at port ${port} ...`)});