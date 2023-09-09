'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClubUserSchema = new Schema({
  club: {
    type: String,
    default: '',
    trim: true
  },
  username: {
    type: String,
    default: '',
    trim: true
  },
  activated: {
    type: Boolean,
    default: '',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('ClubUser', ClubUserSchema);