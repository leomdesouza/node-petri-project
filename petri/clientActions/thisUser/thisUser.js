'use strict';

var tokenAuthentication = require('../../clientStates/tokenAuthentication/tokenAuthentication.js');
var showUserId = require('../../clientStates/thisUser/showUserId.js');

var thisUser = function(app, express){

    var thisUser = express();

    thisUser.use('/', function(req, res, next){
        tokenAuthentication(req, res, next);
    });

    thisUser.get('/', function(req, res){
        showUserId(req, res);
    });

    return thisUser;
};

module.exports = thisUser;