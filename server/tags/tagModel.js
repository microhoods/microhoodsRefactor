var mongoose = require('mongoose'),
    crypto = require('crypto');


var tagSchema = new Schema({

  //userId that references a singleUser
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'user',
    required: true
  },

  //sentiment which is a string
  sentiment: {
    type: String,
    required: true
  },

  //Going to have longitude/latitude geo data that is a 2d array of numbers
  geo: {
    type: Number, 
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

var tag = mongoose.model('tag', tagSchema)