var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
  grading: Number,
  verbalFeedback: String,
  responseEmail: String,
  name: String
})