var mongoose = require('mongoose'),
		config = require('./config'),
		readLine = require('readline'), // Maybe unusefully
		gracefulShutdown, 
		dbURI = 'mongodb://localhost:27017/enAppDB';

if (process.env.NODE_ENV === 'production') {
	// database production URI
}

mongoose.connect(dbURI, {useMongoClient: true});

/*
if (process.platform === "win32") {
	var rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.on("SIGINT", function(){
		process.emit("SIGINT");
	});
}
*/

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
console.log('Mongoose conected to ' + dbURI);
});

mongoose.connection.on('error', function(error) {
console.log('Mongoose connection error ' + error);
});

mongoose.connection.on('disconnected', function() {
console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

// For nodemon restarts
process.once('SIGUSR2', function() {
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});

// For app termination
process.on('SIGINT', function() {
	gracefulShutdown('app termination', function() {
		process.exit(0);
	});
});

// Schemas & Models
require('./verbs'); // 