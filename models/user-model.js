var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  telegramHandle: String,
  registerDate: Date,
  lastLogin: Date,
  currentlyLoggedIn: Boolean
});

var eventSchema = new Schema({
  name: String,
  coordinates: String,
  address: String,
  description: String,
  category: String,
  startTime: Date,
  endTime: Date,
  ongoing: Boolean
});


  
  
  
  
  
