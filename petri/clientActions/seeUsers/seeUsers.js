'use strict';

var showUsers = require('../../clientStates/seeUsers/showUsers.js');
var tokenAuthentication = require('../../clientStates/seeUsers/tokenAuthentication.js');

var seeUsers = function(app, express){

    var seeUsers = express();

    seeUsers.use('/', function(req, res, next){
        tokenAuthentication(req, res, next);
    });

    seeUsers.get('/', function(req, res){
        showUsers(req, res);
    });

    return seeUsers;
};

module.exports = seeUsers;