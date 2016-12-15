var express = require('express');
var router = express.router;

var Event = require('../models/event-model');

router.post('createEvent', function(req, res) {
    var event = new Event({
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