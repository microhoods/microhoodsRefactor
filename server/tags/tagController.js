var tagModel = require('./tagModel.js');

module.exports = {

  //save a tag to DB
  createTag : function(req, res){
    var sentiment = req.body.sentiment || 'dummy';
    var geo = req.body.geo || [100,100];
    tagModel.create({
      sentiment: sentiment,
      geo: geo
    }, function(err, data){
      if(err){
        throw err;
      }
      else{
        res.send(data);
      }
    });
  },
  //fetch all tags from D
  getTags : function(req, res){},
  //delete specific tag from DB
  deleteTag : function(req, res){
    
  }
};