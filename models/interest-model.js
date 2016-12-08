var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var interestSchema = new Schema({

},
{ collection: 'interests' })

var interestEnum = { SPORTS, FOOD, CULTURE };