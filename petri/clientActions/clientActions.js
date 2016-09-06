'use strict'

var signUp = require('./signUp/signUp.js');
var login = require('./login/login.js');

var clientActions = function(app, express){

    var clientActions = express();

    clientActions.use('/signUp', signUp(app, express));
    clientActions.use('/login', login(app, express));

    return clientActions;

};

module.exports = clientActions;