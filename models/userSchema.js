const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name 	: String,
	email 	: String
},{
	timestamps : {createdAt : 'created_at', updatedAt : 'updated_at'}
});

module.exports = mongoose.model('users',userSchema);