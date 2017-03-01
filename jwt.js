var jwt = require('express-jwt');
module.exports = {
    authCheck: jwt({
        secret: new Buffer('wK0ajyzgin1cJjxHXnjTYjF9CZ0lXH1V4V_C9j1Fcj6H0d3IogtU3NL3ColgNtMM', 'base64'),
        audience: 'tLuvkb0DNGFUd9WLFcIJkAfeEtv2kcY7'
    })
}