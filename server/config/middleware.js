var bodyParser = require('body-parser'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    userModel = require('./../users/userModel.js'); 

//Enable this variable for local testing
if(!process.env.PORT){
  var credentials = require('./../../credentials.js') || 'empty';
}




module.exports = function(app, express){
  
  //set up routers  
  var userRouter = express.Router();
  var tagRouter = express.Router();

  //passport set up
  passport.use( new GoogleStrategy({
    clientID: process.env.google_clientId || credentials.google_clientId,
    clientSecret: process.env.google_clientSecret || credentials.google_clientSecret,
    callbackURL: process.env.googleCallbackURL || credentials.googleCallbackUrl
  }, function(accessToken, refreshToken, profile, done){
    //check if that user is already in database
    userModel.findOne({'providers.google.id': profile.id}, function(err, user){
      if(err){
        throw err;
      }
      else{
        //if exists, return user object and referenceID
        console.log(user);
        if(user){
          done(null, user);
        } 
        //if not, create new account in database and return that userObj and referenceID
        else{
          console.log('Creating!');
          userModel.create({
            'providers.google.id': profile.id, 
            'providers.google.accessToken': accessToken,
             userName: profile.displayName
           }, 
           function(err){
            if(err){
              done(err);
            } 
            else {
              console.log(user);
              done(null, user);
            }
          });
        }
      }
    });
  }));

  //middleware

  passport.serializeUser(function(user, done){
    console.log('serializeUser:' + user._id);
    done(null, user); 
  });
  passport.deserializeUser(function(user, done){
    User.findOne({_id : user._id}, function(err, user){
      if(err){
        done(err);
      }
      else{
        done(null, user);
      }
    });
  });
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