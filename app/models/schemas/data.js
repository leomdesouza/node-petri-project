'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DataSchema = new Schema({
    dataCreator: { type: Schema.Types.ObjectId, ref: 'Device', index: { unique: true } },
    dataUnit: { type: String, required: true },
    dataNumber: [{ type: Number }],
    dataDate: [{ type: Date }],
    dataString: [{ type: String }]
});

module.exports = DeviceSchema;