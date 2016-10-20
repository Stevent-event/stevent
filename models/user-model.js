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
