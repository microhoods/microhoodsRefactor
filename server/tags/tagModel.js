var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;


var tagSchema = new Schema({

  userId that references a singleUser
  user: {
    type: Schema.ObjectId, 
    ref: 'User',
    required: true
  },

  //sentiment which is a string
  sentiment: {
    type: String,
    required: true
  },

  //Going to have longitude/latitude geo data that is a 2d array of numbers
  geo: {
    type: [Number], 
    index: '2d', 
    required: true
  },

  //standard entered_at, for potential future features.
  entered_at: {
    type: Date, 
    default: Date,
    required: true
  } 

});

module.exports = mongoose.model('Tag', tagSchema);