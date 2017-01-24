var express = require('express');
var router = express.Router();

var event = require('../models/event-model');

router.get('/getEvents', function(req, res) {
    event.find({})
    .then(function(data) {
        res.status(200).send(data);
    })
})

router.post('createEvent', function(req, res) {
    var event = new event({
        name: req.body.name,
        userResponsible: req.body.userResponsible,
    })
    event.save(function(err, data) {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
})



module.exports = router;