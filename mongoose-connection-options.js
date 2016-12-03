/* From: https://gist.github.com/mongolab-org/9959376
 * 
 * Recommended connection options to mLab MongoDB
 * 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 * 
 */

// req mongoose > 4.3.x (Stevent has 4.6.5)
var mongoose = require('mongoose');   
 
var options = { server: { 
                  socketOptions: { 
                    keepAlive: 300000, 
                    connectTimeoutMS: 30000 }}, 
                replset: { 
                  socketOptions: { 
                    keepAlive: 300000, 
                    connectTimeoutMS : 30000 }}};
 
var mongodbUri = 'mongodb://user:pass@host:port/db';
 
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;
 
conn.on('error', console.error.bind(console, 'connection error:'));
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app. 
});
