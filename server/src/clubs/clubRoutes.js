'use strict';

var clubController = require('./clubController');

module.exports = function (app) {

    app.route('/clubs')
        .get(clubController.list)
        .post(clubController.save);

    app.route('/clubs/relation')
        .get(clubController.relationList)
        .post(clubController.relationSave);

}