'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, index: { unique: true } },
    version: { type: String, required: true },
    type: { type: String, required: true },
});

module.exports = DeviceSchema;