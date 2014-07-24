var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;


var userSchema = new Schema({
  //user's have an id, that is explicitly their google id
  userId : Number,
  userName: String
});

var User = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema);