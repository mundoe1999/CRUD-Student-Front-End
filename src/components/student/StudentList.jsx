import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


// import ImageCard from '../essentials/ImageCard'

/*
  Props must contain:
  - length -> Number of list elements
  - studentlist  -> Array of student objects
*/


class StudentList extends Component{
  constructor(){
    var testdata = require('../../testfiles/teststudents.json');

    super();
    this.state = {
      studentlist: testdata['students']
    };

  }

  componentDidMount(){
    //  Should Get the student list;
    }

  render(){
    //Get Students List
    let students = this.state.studentlist || [];
    console.log(students);
      // Button to generate table
      return (
        <div>
          <table id= "StudentListing">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>GPA</th>
              <th>Link</th>
            </tr>
          {console.log(Array.isArray(this.state.studentlist))}
          {
            this.state.studentlist.map((student) => {
              return(
                
                <tr>
                  <td>{student['fname']}</td>
                  <td>{student['lname']}</td>
                  <td>{student['email']}</td>
                  <td>{student['gpa']}</td>
                  <td><Link to='/StudentInfo'>Click</Link></td>
                </tr>
                
              )
            })
          }
          </table>

        </div>
        )
  }
}

export default StudentList;
