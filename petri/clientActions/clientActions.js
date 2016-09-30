'use strict';

var signUp = require('./signUp/signUp.js');
var login = require('./login/login.js');
var seeUsers = require('./seeUsers/seeUsers.js');

var clientActions = function(app, express){

    var clientActions = express();
    var auth = express();
    // Unauthenticated apis
    clientActions.use('/signUp', signUp(app, express));
    clientActions.use('/login', login(app, express));

    // authenticated apis
    clientActions.use('/seeUsers', seeUsers(app, express));

    return clientActions;

};

module.exports = clientActions;