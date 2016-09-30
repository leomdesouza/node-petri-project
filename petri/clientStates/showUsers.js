'use strict';

var User = require('../../app/models/user.js');
var locales = require('../../locales/locales.js');


var showUsers = function(req, res){
    
    User.find({}, function(err, users){
        if(err){
            res.status(500).json({
                message: locales.en.showUsersError 
            });
            return;
        }
        else{
            res.status(200).json(users);
        }
    });
}

module.exports = showUsers;