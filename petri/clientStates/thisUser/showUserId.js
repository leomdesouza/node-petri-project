'use strict';

var User = require('../../../app/models/user.js');

var showUserId = function(req, res){

    res.status(200).json(req.decoded);

};

module.exports = showUserId;