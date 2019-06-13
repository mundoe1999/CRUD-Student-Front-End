import React, { Component } from 'react';
import NavBar from "../components/essentials/NavBar";
//import { match } from "react-router-dom";
//importing Specific Elements
import StudentInformation from '../components/student/StudentInformation';
import {withRouter} from 'react-router';


class StudentInfoPage extends Component {
  constructor(props){
    super(props);

    
  }

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