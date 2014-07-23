module.exports = function(router){
  router.get('/tags', function(req, res){
    res.send('Here are your tags!');
  });

  router.delete('/tags', function(req, res){
    res.send('Deleting Tags');
  });

  router.post('/tags', function(req, res){
    res.send('Saving Tags');
  });

};