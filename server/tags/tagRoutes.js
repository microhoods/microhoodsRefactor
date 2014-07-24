var tagController = require('./tagController.js');

module.exports = function(router){
  router.get('/tags', tagController.getTags);

  router.delete('/tags/:id', tagController.deleteTag);

  router.post('/tags', tagController.createTag);

};