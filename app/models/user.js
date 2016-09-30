'use strict';

var bcrypt = require('bcrypt-nodejs');
var UserSchema = require('./schemas/user.js');
var mongoose = require('mongoose');

UserSchema.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')){
        return next();
    } 

    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err){
            return next();
        }
        user.password = hash;
        next();
    });
});

UserSchema.methods.comparePassword = function(password){
    var user = this;
    return bcrypt.compareSync(password, user.password);
}

module.exports = mongoose.model('User', UserSchema);