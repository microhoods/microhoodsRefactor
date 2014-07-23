var routes = function(app, express){
  
  app.post('/login', function(req, res){
    res.send('Login Page');
  });

  app.get('/', function(req, res){
    res.send('Home Page');
  });

  app.post('/api/tags', function(req, res){
    res.send('Saving Tags');
  });

  app.delete('/api/tags', function(req, res){
    res.send('Deleting Tags');
  });

  app.get('/api/tags', function(req, res){
    res.send('Here are your tags!');
  });
};


module.exports = routes;