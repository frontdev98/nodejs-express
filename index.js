const express = require('express');
const app = express();

const PORT = 5000;

const userRouter = require('./routers/user-router');

app.use(express.json());
app.use('/api', userRouter);


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})