var express = require('express');
var app = express();

require('./config/routes.js')(app, express);

module.exports = app;

