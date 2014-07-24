module.exports = function(router){
  //The route to get to the login page
  router.post('/users/login', function(req, res){
    res.send('Login Page');
  });
};