var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
    grade: Number,
    verbalFeedback: String,
    responseEmail: String,
    name: { type: String, default: 'Anonymous' }
})

module.exports = mongoose.model('Feedback', feedbackSchema);