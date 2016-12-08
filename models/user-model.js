var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    registerDate: Date,
    lastLogin: Date,
    currentlyLoggedIn: { type: Boolean, default: false },
    ownEvents: [Event],
    interests: [Interest]
}, { collection: 'users' })

module.exports = mongoose.model('User', userSchema);

userSchema.methods.getFullName = function(firstName, lastName) {
    return firstName+" "+lastName;
}

