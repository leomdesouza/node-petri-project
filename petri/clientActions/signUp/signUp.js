'use strict';

var createUser = require('../../clientStates/createUser.js');
var checkUser = require('../../clientStates/checkUser.js');

var signUp = function(app, express){
    
    var signUp = express();

    signUp.use('/', function(req, res, next){
        checkUser(req, res, next);
    });

    signUp.post('/', function(req, res){
        createUser(req, res);
    });

    return signUp;
};

module.exports = signUp;