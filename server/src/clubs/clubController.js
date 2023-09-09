'use strict';

var mongoose = require('mongoose');
var Club = mongoose.model('Club');

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
            }
        });

    club.save()
        .then(c => res.jsonp(c))
        .catch(error => res.status(500).send({ message: error }));

}