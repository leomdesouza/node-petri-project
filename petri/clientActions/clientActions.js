'use strict';

var signUp = require('./signUp/signUp.js');
var login = require('./login/login.js');
var seeUsers = require('./seeUsers/seeUsers.js');
var deviceSignUp = require('./deviceSignUp/deviceSignUp.js');
var thisUser = require('./thisUser/thisUser.js');
var configDevice = require('./configDevice/configDevice.js');

var clientActions = function(app, express){

    var clientActions = express();

    // Unauthenticated apis
    clientActions.use('/signUp', signUp(app, express));
    clientActions.use('/login', login(app, express));
    clientActions.use('/configDevice', configDevice(app, express));

    // Authenticated apis
    clientActions.use('/thisUser', thisUser(app, express));
    clientActions.use('/seeUsers', seeUsers(app, express));
    clientActions.use('/deviceSignUp', deviceSignUp(app, express));
    //clientActions.use('/sendInformation', sendInformation(app, express));
    //clientActions.use('/getInformation', getInformation(app, express));

    return clientActions;

};

module.exports = clientActions;