var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    name: User,
    userResponsible: User,
    coordinates: String,
    address: String,
    description: String,
    category: String,
    startTime: { type: Date, default: Date.now },
    endTime: Date,
    ongoing: Boolean,
    attendingUsers: [User] 
}, { collection: 'events' });  

module.exports = mongoose.model('Event', eventSchema);
