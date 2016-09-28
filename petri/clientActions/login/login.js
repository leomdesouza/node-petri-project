'use strict'

var userAuthentication = require('../../clientStates/userAuthentication.js');

var login = function(app, express){

    var login = express.Router();

    login.post('/', function(req, res){
        userAuthentication(req, res);
    });

    return login;

};

module.exports = login;