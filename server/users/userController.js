var userModel = require('./userModel.js');

module.exports = {
  loginToDatabase : function(accessToken, refreshToken, profile, done){
    //check if that user is already in database
    userModel.findOne({'providers.google.id': profile.id}, function(err, user){
      if(err){
        throw err;
      }
      else{
        //if exists, return user object and referenceID
        if(user){
          done(null, user);
        } 
        //if not, create new account in database and return that userObj and referenceID
        else{
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
              done(null, user);
            }
          });
        }
      }
    });
  },
  serializeUser : function(user, done){
    done(null, user);
  },
  deserializeUser : function(user, done){
    User.findOne({_id : user._id}, function(err, user){
      if(err){
        done(err);
      }
      else{
        done(null, user);
      }
    });
  }
};