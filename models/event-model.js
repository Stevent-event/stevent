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
    description: { String, default: "My shiny new 7vent!" },
    category: { String, default: "Culture" },
    date: { Date, default: Date.now() },
    startTime: { Date, default: Date.now() },
    endTime: { Date, default: Date.now()+7200000 }, //default 2 hour event
    ongoing: { Boolean, default: false },
    attendingUsers: [String], //this needs event creator as first user by default
    maximumUsers: { Number, default: 4 },
    currentUserNumber: { Number, default: 1 },
}, { collection: 'events' })

module.exports = mongoose.model('Event', eventSchema);
