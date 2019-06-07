import React, { Component } from 'react';

//Importing essentials
import NavBar from '../components/essentials/NavBar'


//importing Specific Elements
import StudentForm from '../components/student/StudentForm';


class Home extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <StudentForm />
        </div>
    </div>
    );
  }
}

export default Home;