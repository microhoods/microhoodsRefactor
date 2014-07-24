module.exports = function(router, passport){
  //The route to get to the login page

  router.get('/auth/google', passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/userinfo.profile'}), function(req, res){});

  router.get('/auth/google/callback', function(req, res){
    res.redirect('/');
  });

};