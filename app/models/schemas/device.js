'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    deviceOwner: { type: Schema.Types.ObjectId, ref: 'User' },
    deviceName: { type: String, required: true },
    deviceCode: { type: String, required: true, index: { unique: true } },
    deviceVersion: { type: String, required: true },
    deviceType: { type: String, required: true }
});

module.exports = DeviceSchema;