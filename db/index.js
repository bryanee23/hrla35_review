var mongoose = require('mongoose');
var studentSchema = require('../schema.js');
var mongoURI = 'mongodb://localhost/review';
// allow use of es6 promises
mongoose.Promise = global.Promise;

// Connect Mongoose to our local MongoDB via URI specified above
var db = mongoose.connect(mongoURI)
  .then(()=>{console.log('connected to mongoDB')});

// specify your model "Student" here
// instance of what our collection will look like
// will still work without "new" keyword
var Student = mongoose.model('Students', studentSchema)
 
// export your model
module.exports = Student;