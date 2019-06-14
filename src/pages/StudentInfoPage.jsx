import React, { Component } from 'react';
import {withRouter} from 'react-router';

//Importing Essential Elements
import NavBar from "../components/essentials/NavBar";

//importing Specific Elements
import StudentInformation from '../components/student/StudentInformation';



class StudentInfoPage extends Component {

  //Rendering Page
  render(){
    console.log("help");
    console.log(this.props);
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