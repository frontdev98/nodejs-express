const express = require('express');

const PORT = 5000;

const app = express();

app.get('/', async (req, res) => {
    await res.json('Hello world')
})

app.listen(PORT, () => {
    console.log("Working on port " + PORT);
})