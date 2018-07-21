const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController.js');

userRouter.post('/login',function(req,res){
	userController.login(req,res);
})

module.exports = userRouter;