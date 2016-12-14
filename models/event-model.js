var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: String,
  userResponsible: String,
  coordinates: String,
  address: String,
  description: String,
  category: String,
  startTime: Date,
  endTime: Date,
  ongoing: Boolean,
  attendingUsers: [User] 
}, { collection: 'events' });  

module.exports = mongoose.model('Event', eventSchema);
