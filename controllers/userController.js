
const userModel = require('../models/userSchema.js');
class userController{

	login(req,res){
		console.log('its working !!');
		let user = new userModel;
		user.name = req.body.name;
		user.email = req.body.email;
		user.save(function(error,userinformation){
			res.status(200).json({status : 2,message:'saved',data : userinformation});
			return false;
		})
	}
}
userController = new userController;
module.exports = userController;