var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
    grade: { type: Number, min: 1, max: 5 },
    verbalFeedback: String,
    responseEmail: String,
    name: { type: String, default: this.name }
}, { collection: 'feedbacks' })

module.exports = mongoose.model('Feedback', feedbackSchema);