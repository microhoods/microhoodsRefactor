var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    mongoURI = process.env.mongoURI || 'mongodb://localhost/microhoods';

mongoose.connect(mongoURI);

require('./config/middleware.js')(app, express);

module.exports = app;

