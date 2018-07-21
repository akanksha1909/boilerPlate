const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController.js');

//helpers
const userHelper = require('../helpers/userHelper.js');

userRouter.post('/login',function(req,res){
	userController.login(req,res);
});
userRouter.post('/signup',[userHelper.postsignup],function(req,res){
	userController.signup(req,res);
})

module.exports = userRouter;