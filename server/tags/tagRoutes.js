var tagController = require('./tagController.js'),
    checkIsAuth = require('./../config/utils.js').checkIsAuth;

module.exports = function(router){
  router.get('/tags', checkIsAuth, tagController.getTags);

  router.delete('/tags/:id', checkIsAuth, tagController.deleteTag);

  router.post('/tags', checkIsAuth, tagController.createTag);

};