import React from 'react';


export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'student': {}
    }
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }

  componentDidMount() {
    this.getRandomStudent();
  }

  getRandomStudent(){
    var ind = Math.floor(Math.random()*this.state.studentlist.length)
    this.setState({
      student: this.props.students[ind]
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.imgurl}></img>
    <h1>{this.state.student}</h1>
        </div>
        <button onClick={this.getRandomStudent}>Randomize</button>
      </div>
    )
  }
}