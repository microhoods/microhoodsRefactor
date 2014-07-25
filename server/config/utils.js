module.exports.checkIsAuth = function(req, res, next){
  console.log('From Check Auth:');
  console.log(req.isAuthenticated());
  if(req.isAuthenticated()){
    console.log('User is authenticated!');
    return next();
  } else{
    console.log('User is not authenticated!');
    res.redirect('/');
  }
};