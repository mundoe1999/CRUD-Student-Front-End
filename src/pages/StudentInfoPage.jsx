import React, { Component } from 'react';

//Importing essentials
import NavBar from "../components/essentials/NavBar";

//importing Specific Elements
import StudentInformation from '../components/student/StudentInformation';
import StudentForm from '../components/student/StudentForm';



class StudentInfoPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: true
    }
    this.ChangeDisplay = this.ChangeDisplay.bind(this);
  }
  
  //Button Control
  ChangeDisplay(event){
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  //Rendering Page
  render(){
    const isDisplayInfo = this.state.isHidden;
    return (
      <div className="App">
        <NavBar />
        <div className="Content">
          <h1>Student<strong>Profile</strong></h1>
          {isDisplayInfo ? <StudentInformation buttonChange={this.ChangeDisplay.bind(this)} /> : <StudentForm displayChange={this.ChangeDisplay.bind(this)}/>}
        </div>
    </div>
    );
  }
}

export default StudentInfoPage;