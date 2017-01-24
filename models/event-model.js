var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    eventName: String,
<<<<<<< HEAD
    eventOwner: String,
    coordinates: String,
    address: String,
=======
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
>>>>>>> 985759dc72ca7f5966b5f0624f01e28c446fede2
    description: String,
    category: String,
    startTime: { type: Date, default: Date.now() },
    endTime: { type: Date, default: Date.now()+7200000 },
    ongoing: Boolean,
    attendingUsers: [String]
}, { collection: 'events' })

module.exports = mongoose.model('Event', eventSchema);
