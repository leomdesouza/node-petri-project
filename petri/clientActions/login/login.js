'use strict';

var checkUserLogin = require('../../clientStates/checkUserLogin.js');
var passwordValidation = require('../../clientStates/passwordValidation.js');
var tokenCreation = require('../../clientStates/tokenCreation.js');

var login = function(app, express){

    var login = express();

    login.use('/', function(req, res, next){
        checkUserLogin(req, res, next);
    });

    login.use('/', function(req, res, next){
        passwordValidation(req, res, next);
    });

    login.post('/', function(req, res){
        tokenCreation(req, res);
    });

    return login;

};

module.exports = login;