var express = require('express');
var router = express.Router();


router.post('/login', function(req, res) {
    console.log(req.body);

    res.status(200).send();
})
router.post('/signup', function(req, res) {
    console.log(req.body);

    res.status(200).send();
})



module.exports = router;