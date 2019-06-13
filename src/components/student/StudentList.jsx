import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


// import ImageCard from '../essentials/ImageCard'

/*
  Props must contain:
  - campus -> Exact name of campus
  - studentlist  -> Array of student objects
*/


class StudentList extends Component{
  constructor(props){
    var testdata = require('../../testfiles/teststudents.json');

    super(props);
    this.state = {
      studentlist: testdata['students']
    };

    var newstudents = [];
    console.log(this.props)
    console.log(this.props.hasOwnProperty("campus"))
    if(this.props.hasOwnProperty("campus"))
    {
      for(var i = 0; i < this.state.studentlist.length; i++)
      {
        if(this.state.studentlist[i].campus === this.props.campus)
        {
          newstudents.push(this.state.studentlist[i]);
        }
      }
      this.state.studentlist = newstudents;
    }
  }

  componentDidMount(){
    //  Should Get the student list;

  }

  render(){
    //Get Students List
    let students = this.state.studentlist || [];
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
