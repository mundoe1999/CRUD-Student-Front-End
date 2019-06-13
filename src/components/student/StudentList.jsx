import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchAllStudentsThunk, addStudentThunk } from "../../thunks"

// import ImageCard from '../essentials/ImageCard'

/*
  Props must contain:
  - campus -> Exact name of campus
  - studentlist  -> Array of student objects
*/


class StudentList extends Component{


  componentDidMount(){
    this.props.fetchAllStudents();

        /*
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
*/


  }

  render(){
    //Get Students List
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
            this.props.allStudents.map((student) => {
              return(
                
                <tr>
                  <td>{student['firstName']}</td>
                  <td>{student['lastName']}</td>
                  <td>{student['email']}</td>
                  <td>{student['gpa']}</td>
                  <td><Link to={`/Students/${student["id"]}`}>Click</Link></td>

                </tr>
                
              )
            })
          }
          </table>

        </div>
        )
  }
}

function mapState(state){
  return { 

    allStudents: state.allStudents
  }
}
// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),

  }
}

export default connect(mapState, mapDispatch)(StudentList);
