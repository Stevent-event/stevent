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
    description: { type: String, default: "My shiny new 7vent!" },
    category: { type: String, default: "Culture" },
    date: { type: Date, default: Date.now() },
    startTime:{},// { type: Date, default: Date.now() },
    endTime: {}, //{ type: Date, default: Date.now()+7200000 }, //default 2 hour event
    ongoing: { type: Boolean, default: false },
    attendingUsers: [String], //this needs event creator as first user by default
    maximumUsers: { type: Number, default: 4 },
    currentUserNumber: { type: Number, default: 1 },
}, { collection: 'events' })

module.exports = mongoose.model('Event', eventSchema);
