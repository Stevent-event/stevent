var express = require('express');
var router = express.Router();

/*router.get('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})*/
router.get('/', function (req, res, next) {
    
    res.render('index.html');
})

module.exports = router;