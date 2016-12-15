var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    eventName: String,
    eventOwner: String,
    coordinates: String,
    address: String,
    description: String,
    category: String,
    startTime: { type: Date, default: Date.now },
    endTime: { type: Date, default: Date.now+7200000 },
    ongoing: Boolean,
    attendingUsers: [User] 
}, { collection: 'events' })  

module.exports = mongoose.model('Event', eventSchema);
