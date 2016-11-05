var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var user = require('./routes/user');
var mongoose = require('mongoose');

var config = require('./config');
var mongoose = require('mongoose');
//asdfasdf
// Global variables and aliases
var app = express();
var port = process.env.PORT || 3000;

mongoose.connect(config.database);
mongoose.connection.once('open', function() {
  console.log('Connected to database in ' + config.database);
})
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB');
})

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', index);
app.use('/api', tasks);
app.use('/api/user', user);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'views/index.html'))
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});

// Mongoose MongoDB Connection 
// TODO 1: partly duplicate with mongoose-connection-options.json
// TODO 2: look what needs to be separated to config.js ("express.js best practices") 
//mongoose.connect('mongodb://vivian:steventpw@ds029575.mlab.com:29575/stevent'); //server failed to start with this "not a function"
//var db = mongoose.connection();
//db.on('error', console.error.bind(console, 'connection error'));
//db.once('open', function(){});
