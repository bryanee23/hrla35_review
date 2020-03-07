import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.getStudents.map((student, index)=>(
      <ListElement student={student} key={index} getStudents={props.getStudent}/>
    ) )}

  </div>


export default List