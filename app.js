const express = require('express');

const port = 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Site Is Currently Under Maintenence</h1>')
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});