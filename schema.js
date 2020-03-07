var mongoose = require('mongoose');

var studentSchema = mongoose.Schema ({
  //aka name: String
  name: {type: String},
  imgurl: {type: String}
});

module.exports = studentSchema; 