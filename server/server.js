var express = require('express'),
    mongoose = require('mongoose'),
    app = express();

mongoose.connect('mongodb://localhost/microhoods');

require('./config/middleware.js')(app, express);

module.exports = app;

