'use strict';

var mongoose = require('mongoose');
var DataSchema = require('./schemas/device.js');

module.exports = mongoose.model('Data', DataSchema);