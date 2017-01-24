var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    eventName: String,
    eventOwner: String, //the user who created event
    location: {
        lat: Number,
        lng: Number
    }, //Google maps api latitude and langnitude
    address: {
        street_number: Number,
        route: String,
        locality: String,
        postal_code: Number,
        country: String,
        formatted_address: String
    },
    description: String,
    category: String,
    startTime: { type: Date, default: Date.now },
    endTime: Date,
    ongoing: Boolean,
    attendingUsers: [String]
}, { collection: 'events' })

module.exports = mongoose.model('Event', eventSchema);
