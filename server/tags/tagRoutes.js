var tagController = require('./tagController.js');

module.exports = function(router){
  router.get('/tags', function(req, res){
    res.send('Here are your tags!');
  });

  router.delete('/tags/:id', function(req, res){
    var id = req.params.id;
    res.send('Deleting Tags @'+ id);
  });

  router.post('/tags', tagController.createTag);

};