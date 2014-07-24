var bodyParser = require('body-parser');

module.exports = function(app, express){
  
  var userRouter = express.Router();
  var tagRouter = express.Router();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  app.use('/api', userRouter);
  app.use('/api', tagRouter);

  require('../users/userRoutes.js')(userRouter);
  require('../tags/tagRoutes.js')(tagRouter);

};