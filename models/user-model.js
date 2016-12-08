var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  handle: String,
  email: String,
  password: String,
  telegramHandle: String,
  registerDate: Date,
  lastLogin: Date,
  currentlyLoggedIn: { type: Boolean, default: false }
}, {collection: 'users'});

module.exports = mongoose.model('User', userSchema);
