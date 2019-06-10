const mongoose = require('mongoose');
require('./locations');

const dbURl = 'mongodb://localhost/tlvl';
mongoose.connect(dbURl, {useNewUrlParser:true});

mongoose.connection.on('connected', () => {
console.log('Mongoose connected to ' + dbURl);
});
mongoose.connection.on('error', err => {  
  console.log('Mongoose default connection error: ' + err);
}); 
mongoose.connection.on('disconnected', () => {
	console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
	mongoose.connection.close( () => {
       console.log('Mongoose disconnected through ' + msg);
       callback();
		});
};

process.once('SIGUSR2', () => {
gracefulShutdown('nodemon restart', () => {
  process.kill(process.pid, 'SIGUSR2');
 });
});

process.on('SIGINT', () => {
 gracefulShutdown('app termination', () => {
  process.exit(0);
 });
});

process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});