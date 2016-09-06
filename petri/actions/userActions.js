'use strict'

var signUp = require('./signUp/signUp.js');


var userActions = function(app, express){

    var action = express();

    action.use('/signUp', signUp(app, express));

    return action;

};

module.exports = userActions;