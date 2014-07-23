var app = require('./server/server.js');

var port = process.env.PORT || 8300;

app.listen(port, function(){
  console.log('Server is listening on ' + port);
});