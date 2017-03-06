var express = require('express');
var router = express.Router();
var auth = require('./../jwt');

var event = require('../models/event-model');

router.get('/getEvents', auth.authCheck, function(req, res) {
    event.find({})
    .then(function(data) {
        res.status(200).send(data);
    })
})

router.get('/getMyEvents/:user_id', auth.authCheck, function(req, res) {
    event.find({ 'owner.user_id': req.params.user_id})
    .then(function(data) {
        res.status(200).send(data);
    })
})

router.get('/getEvent/:_id', auth.authCheck, function(req, res) {
    event.findOne({_id: req.params._id})
    .then(function(data) {
        res.status(200).send(data);
    })
})

router.get('/joinEvent/:eventId/:user_id', auth.authCheck, function(req, res) {
    event.findOne({_id: req.params.eventId})
    .then(function(event) {
        event.attendingUsers.push(req.params.user_id)
        event.save()
        .then(function(data) {
            res.status(200).send();
        })
        
    })
})

router.get('/leaveEvent/:eventId/:user_id', auth.authCheck, function(req, res) {
    event.findOne({_id: req.params.eventId})
    .then(function(event) {
        for(var i=0; i<event.attendingUsers.length; i++) {
            if(event.attendingUsers[i]==req.params.user_id) {
                event.attendingUsers.splice(i, 1);
            }
        }
        event.save()
        .then(function(data) {
            res.status(200).send();
        })
        
    })
})

router.post('/createEvent', auth.authCheck, function(req, res) {
    console.log(req.body);
    var newEvent = new event({
        name: req.body.name,
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