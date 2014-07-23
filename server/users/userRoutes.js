module.exports = function(router){
  //The route to get to the login page
  router.post('/login', function(req, res){
    res.send('Login Page');
  });

  //The main webpage that will have acess to your tags.
  router.get('/', function(req, res){
    res.send('Home Page');
  });
};