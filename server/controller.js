const helper = require('../db/dbhelpers.js');

const controller = {
  students: {
    get: (req, res) => {
      //pass this into db
      helper.students.getStudent()
      .then((results)=> res.status(201).json(results))
      .catch((err)=> res.json())
    }, 
    post: (req, res) => {
      var name = req.body.name;
      var imgurl = req.body.imgurl;
      //pass this into db
      helper.students.postName({name, imgurl})
      .then(()=>{res.status(201).send('posted')})
      .catch((err)=>{res.status(400).send(err)})
    },
    update: (req, res) => {
      var name = req.body.newName;
      var _id = req.params.id;
      //expects objects
      helper.students.updateName({_id}, {name})
      .then(()=>{res.status(201).send('updated')})
      .catch((err)=>{res.status(400).send(err)})
    }
  }
};

module.exports = controller