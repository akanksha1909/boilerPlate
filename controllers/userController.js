const jwt         = require( 'jsonwebtoken'); //Package used for session validation

const config      = require('../config.js')
const userModel = require('../models/userSchema.js');
const _ = require('lodash');	
class userController{

	login(req,res){
		userModel.findOne({email : req.body.email}).exec(function(error,user){
			if(error){
				res.status(500).json({message : 'Oops! some error occured',error: error});
				return false;
			}
			if(user){
				let verifypassword = user.verifyPassword(req.body.password);
				if(verifypassword){
					let token = jwt.sign({user : user._id },config.jwtsecret,{expiresIn : '1h'});
					res.status(200).json({message :'Login successful' ,token : token });
					return false;
				}else{
					res.status(403).json({message : 'Wrong password'}); return false;
				}
			}
			if(!user){
				res.status(404).json({message : 'Email not found'});
			}
		});
	}
	signup(req,res){
		userModel.findOne({email : req.body.email}).exec(function(error,user){
			if(error){
				res.status(500).json({message : 'Oops! some error occured' ,error : error});
				return false;
			}
			if(user){
				res.status(403).json({message : 'Email is already taken. Please try some other email'});
				return false;
			}
			if(_.size(user) == 0){
				user = new userModel;
				user.name = req.body.name;
				user.email = req.body.email;
				user.password = new userModel().generateHash(req.body.password);
			}
			user.save(function(error,userinformation){
				res.status(200).json({message :'Signup successful'});
				return false;
			})

		})
	}
}
userController = new userController;
module.exports = userController;