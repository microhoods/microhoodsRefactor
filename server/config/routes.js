var routes = function(app, express){
  
  //The route to get to the login page
  app.post('/login', function(req, res){
    res.send('Login Page');
  });

  //The main webpage that will have acess to your tags.
  app.get('/', function(req, res){
    res.send('Home Page');
  });

  //The route to post tags to the database
  app.post('/api/tags', function(req, res){
    res.send('Saving Tags');
  });

  //The route to remove tags from the database
  app.delete('/api/tags', function(req, res){
    res.send('Deleting Tags');
  });

  //The route to retrieve your tags for display
  app.get('/api/tags', function(req, res){
    res.send('Here are your tags!');
  });
};

module.exports = routes;