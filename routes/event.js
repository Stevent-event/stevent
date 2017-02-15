var express = require('express');
var router = express.Router();

var event = require('../models/event-model');

router.get('/getEvents', function(req, res) {
    console.log(req);
    event.find({})
    .then(function(data) {
        res.status(200).send(data);
    })
})

router.post('/createEvent', function(req, res) {
    var newEvent = new event({
        eventName: req.body.eventName,
        eventOwner: req.body.eventOwner,
     /*
        address:req.body.address,
       /* street_number: req.body.street,
        postal_code: req.body.postalcode,
        locality: req.body.city,
        country: req.body.country,
        */
        description: req.body.description,
        category: req.body.category,
        date:req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
    })
    newEvent.save(function (err, data) {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
})


module.exports = router;