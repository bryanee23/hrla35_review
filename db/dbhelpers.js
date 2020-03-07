var db = require('./');

//run our quiries
module.exports = {
  students: {
    // fetch all students
    getStudent: () => db.find({}),
    // add a student
    postName: (student) => db.create(student),
    // update a student's name
    updateName: (_id, name) => db.findOneAndUpdate(_id, name),
  }
}; 