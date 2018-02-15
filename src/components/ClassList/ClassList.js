import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class ClassList extends Component {
  constructor() {
    super();

    this.state={
      students: []
    }

    
  }

  componentDidMount () {
    axios({
      method: 'GET',
      url: "http://localhost:3005/students?class="+this.props.match.params.class
    }).then(response=> {
      this.setState({students:response.data});
    });
  };

  render() {
    const students = this.state.students.map((student,index) => (
              <Link to={`/student/${student.id}`} key={index}><h3>{student.first_name} {student.last_name}</h3></Link>
  ));

    return (
      <div className="box"> 

        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
          {students}
      </div>
    )
  }
}