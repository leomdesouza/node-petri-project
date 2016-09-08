'use strict'

var showUsers = require('../../clientStates/showUsers.js');

var seeUsers = function(app, express){

    var seeUsers = express.Router();

    seeUsers.get('/', function(req, res){

        showUsers(req, res);

    });

    return seeUsers;
};

module.exports = seeUsers;