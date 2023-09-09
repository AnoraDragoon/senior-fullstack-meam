'use strict';

var mongoose = require('mongoose');

var Club = mongoose.model('Club');
var ClubUser = mongoose.model('ClubUser');

module.exports.list = function (req, res) {
    Club.find()
        .then(c => res.jsonp(c))
        .catch(error => res.status(500).send({ message: error }));;
}

module.exports.save = function (req, res) {
    let club = new Club(req.body);

    Club.findOne({ name: club.name })
        .then(c => {
            if (c) {
                res.status(500).send({ message: 'Club name: "' + club.name + '" is already taken' });
                return;
            }
            club.save()
                .then(cb => res.jsonp(cb))
                .catch(error => res.status(500).send({ message: error }));
        });
}

module.exports.relationList = function (req, res) {
    if (!req.query.username) {
        res.status(400).send({ message: 'Bad query request!!' });
        return;
    }

    ClubUser.find({ username: req.query.username })
        .then(cu => res.jsonp(cu))
        .catch(error => res.status(500).send({ message: error }));;
}

module.exports.relationSave = function (req, res) {
    let clubUser = new ClubUser(req.body);

    clubUser.save()
        .then(cu => res.jsonp(cu))
        .catch(error => res.status(500).send({ message: error }));
}