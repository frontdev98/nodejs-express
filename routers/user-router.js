const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user-controller');

userRouter.get('/users/:id', userController.getOne)
userRouter.get('/users/', userController.getAll)
userRouter.post('/users/', userController.add)
userRouter.put('/users/:id', userController.modify)
userRouter.delete('/users/:id', userController.delete)

module.exports = userRouter