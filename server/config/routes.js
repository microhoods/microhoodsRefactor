var routes = function(app, express){
  app.get('/', function(req, res){
    res.send('Hello World');
  });

  app.get('/login', function(req, res){
    res.send('Login Page');
  });

  app.get('/home', function(req, res){
    res.send('Home Page');
  });
};


module.exports = routes;