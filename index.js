const express = require('express');
const app = express();
const remeberHost = require('./middlewares/statistics');

const PORT = 5000;

const userRouter = require('./routers/user-router');

// statistics
app.use(remeberHost);

app.use(express.json());
app.use('/api', userRouter);

// error-handling middleware (database)
app.use((err, req, res, next) => {
    let errDetailMsg = '';

    switch (err.code) {
        case '22P02':
            errDetailMsg = "Wrong field/s. Check again.";
            break;

        default:
            errDetailMsg = "Unknown error";
    }

    res.status(500).send("Error, server says: " + `"${errDetailMsg}"`);

    next();
});



app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})