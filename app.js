	const express = require('express');  // Express app library
	const mongoose  = require('mongoose'); // Database layer for mongodb
	const bodyParser = require('body-parser'); // Body parser for parsing input parameters in request

	const app = express();

	mongoose.set('debug',true);
	mongoose.connect('mongodb://localhost:27017/bookmarks');


	//Initialize plugins
	app.use(bodyParser.json( {limit: '50mb'} )); // support json encoded bodies
	app.use(bodyParser.urlencoded({ extended: true,limit: '50mb', parameterLimit: 100000 })); // support encoded bodies

	const user = require('./routes/userRouter.js');
	app.use('/user',user);

	const server = app.listen(5000,function(){
		console.log('Server is running on Port: 5000');
	});

	module.exports = server;