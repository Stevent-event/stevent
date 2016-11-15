var express = require('express');
var router = express.Router();

var User = require('../models/user-model');


    router.post('/login', function(req, res) {
        console.log(req.body);

        var user = new User({
            email: req.body.email,
            password: req.body.password
        })
        user.save(function(err, data) {
            if(err) {
                res.status(500)
            }
            res.status(200).send();
        })

    })

    router.get('/getUsers', function(req, res) {
        User.find({})
        .then(function(data) {
            res.status(200).send(data);
        })
    })

router.post('/passwordchange', function(req, res) {
    console.log(req.body);

    res.status(200).send();
})

module.exports = router;