var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    eventName: String,
    eventOwner: String, //the user who created event
    coordinates: [String],
    address: String,
    description: String,
    category: String,
    startTime: { type: Date, default: Date.now },
    endTime: Date,
    ongoing: Boolean,
    attendingUsers: [String] 
}, { collection: 'events' })  

module.exports = mongoose.model('Event', eventSchema);
