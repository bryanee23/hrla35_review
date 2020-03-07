const mongoose = require('mongoose');
const Student = require('./db');
const seedData = require('./students.json');

// Fill in the definition of insertSeedData so that when
// this file is run in the terminal with `node seed.js`,
// all students are inserted into the database
var insertSeedData = function() {
  // fill in your seed function here
  Student.insertMany(seedData)
    .then(()=>{
      console.log('seeded');
      mongoose.connection.close(); 
    })
    .catch((err)=>{console.log(err)})
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertSeedData();