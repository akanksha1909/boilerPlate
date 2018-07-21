const mongoose = require('mongoose');
const bcrypt  = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
	name 	: String,
	email 	: String,
	password : String
},{
	timestamps : {createdAt : 'created_at', updatedAt : 'updated_at'}
});

userSchema.methods.generateHash = (password)=>{
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.verifyPassword = function(password){
  let user = this;
  console.log(password);
  console.log(user.password);
  return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('users',userSchema);