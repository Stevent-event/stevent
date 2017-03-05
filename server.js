var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var index = require('./routes/index');
var user = require('./routes/user');
var event = require('./routes/event');

// Global variables and aliases
var app = express();
var port = process.env.PORT || 3000;
var prod = process.env.NODE_ENV === 'production';

mongoose.connect(config.database);
mongoose.connection.once('open', function() {
  console.log('Connected to database in ' + config.database);
});
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB');
});
// to handle browser refresh issue
/*function refreshPageRequest(req,res) {
    res.sendFile("views/index.html", { root: '.' });
}
*/
//View Engine
app.set('views', path.join(__dirname, '.'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder
app.use(express.static(path.join(__dirname, '.')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use('/', index);
app.use('/api/event', event);
app.use('/api/authentication', user);
// to handle browser refresh issue
// app.use(refreshPageRequest);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'views/index.html'))
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});
