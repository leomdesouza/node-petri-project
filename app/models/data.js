'use strict';

var mongoose = require('mongoose');
var DataSchema = require('./schemas/data.js');

module.exports = mongoose.model('Data', DataSchema);