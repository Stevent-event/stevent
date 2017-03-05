var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    name: String,
    owner: {}, //owner id
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
        formatted_address: {type: String, default: ''}
    },
    description: { type: String, default: '' },
    category: { type: String, default: "Culture" },
    date: Date,
    startTime: Date,
    endTime: Date,
    ongoing: { type: Boolean, default: false },
    attendingUsers: [String], //attending user id:s
    limitedAttendees: {type: Boolean, default: false}, //true if attendees count limited
    maximumParticipants: { type: Number, default: 8 }
}, { collection: 'events' })

module.exports = mongoose.model('Event', eventSchema);
