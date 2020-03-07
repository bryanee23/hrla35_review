import React from 'react';
import axios from 'axios';


export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'imgurl': ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(e){
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      [name] : value
    })

  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('api/students', {
      name: this.state.name,
      value: this.state.imgurl,
    })
    .then(()=>{
      console.log('sucess')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Student Name: </label>
          <input type="text" name="name" />
          <label>Image URL: </label>
          <input type="text" name="imgurl" />
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    )
  }
}