'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String },
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false },
});

module.exports = UserSchema;