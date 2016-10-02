'use strict';

var mongoose = require('mongoose');
var DeviceSchema = require('./schemas/device.js');

module.exports = mongoose.model('Device', DeviceSchema);