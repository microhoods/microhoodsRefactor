var tagModel = require('./tagModel.js');

module.exports = {

  //save a tag to DB
  createTag : function(req, res){
    var sentiment = req.body.sentiment || 'dummy';
    var geo = req.body.geo || [100,100];
    var userId = req.user._id;
    tagModel.create({
      user: userId,
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
  getTags : function(req, res){
    tagModel.find(function(err, data){
      if(err){
        throw err;
      } else {
        res.send(data);
      }
    });
  },
  //delete specific tag from DB
  deleteTag : function(req, res){
    tagModel.remove({
      _id: req.params.id
    }, function(err){
      if(err){
        throw err;
      } else {
        res.send('Data with id:' + req.params.id + ' Deleted');
      }
    });
  }
};