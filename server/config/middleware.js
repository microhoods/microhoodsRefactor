var bodyParser = require('body-parser'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    userModel = require('./../users/userModel.js'),
    userController = require('./../users/userController.js'); 

//Enable this variable for local testing
if(!process.env.PORT){
  var credentials = require('./../../credentials.js');
}


module.exports = function(app, express){
  
  //set up routers  
  var userRouter = express.Router();
  var tagRouter = express.Router();

  //passport set up
  passport.use(new GoogleStrategy({
    clientID: process.env.google_clientId || credentials.google_clientId,
    clientSecret: process.env.google_clientSecret || credentials.google_clientSecret,
    callbackURL: process.env.googleCallbackURL || credentials.googleCallbackUrl
  }, userController.loginToDatabase));

  //middleware

  passport.serializeUser(userController.serializeUser);
  passport.deserializeUser(userController.deserializeUser);
  
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  //attaching routers
  app.use('/api', userRouter);
  app.use('/api', tagRouter);
  
  //require routers
  require('../users/userRoutes.js')(userRouter, passport);
  require('../tags/tagRoutes.js')(tagRouter);



};