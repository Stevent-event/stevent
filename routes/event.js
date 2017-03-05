var express = require('express');
var router = express.Router();
var auth = require('./../jwt');

var event = require('../models/event-model');

router.get('/getEvents', function(req, res) {
    event.find({})
    .then(function(data) {
        res.status(200).send(data);
    })
})

router.get('/getEvent/:_id', function(req, res) {
    event.findOne({_id: req.params._id})
    .then(function(data) {
        res.status(200).send(data);
    })
})

router.post('/createEvent', function(req, res) {
    var newEvent = new event({
        event: req.body.name,
        owner: req.body.owner,
        location: req.body.location,
        lat: req.body.lat,
        lng: req.body.lng,

        address: req.body.address,
        formatted_address: req.body.formatted_address,
        // street_number: req.body.street,
        // postal_code: req.body.postalcode,
        // locality: req.body.city,
        // country: req.body.country,
        // lat: req.body.lat,
        // lng: req.body.lng,

        description: req.body.description,
        category: req.body.category,
        date:req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        limitedAttendees: req.body.limitedAttendees,
        maximumAttendees:req.body.maximumAttendees,
    })
    newEvent.save(function (err, data) {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
})


module.exports = router;