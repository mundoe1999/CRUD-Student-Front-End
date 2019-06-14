import React, { Component } from 'react';
import {withRouter} from 'react-router';
import NavBar from "../components/essentials/NavBar";
import StudentInformation from '../components/student/StudentInformation';

class StudentInfoPage extends Component {

  //Rendering Page
  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="Content">
          <h1>Student<strong>Profile</strong></h1>
          <StudentInformation userId ={this.props.match.params.userId} /> 
        </div>
    </div>
    );
  }
}

//export default StudentInfoPage;
export default withRouter(StudentInfoPage);