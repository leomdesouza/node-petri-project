'use strict'

var User = require('../../app/models/user.js');
var locales = require('../../locales/locales.js');


var showUsers = function(req, res){
    User.find({}, function(err, users){
        if(err){
            res.json({ message: locales.en.showUsersError });
            return;
        }
        else{
            res.json(users);
        }
    });
}

module.exports = showUsers;