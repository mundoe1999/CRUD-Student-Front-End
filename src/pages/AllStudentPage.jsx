import React, { Component } from 'react';

//Importing essentials
import NavBar from "../components/essentials/NavBar";

//importing Specific Elements
import StudentList from '../components/student/StudentList';


class AllStudentPage extends Component {
  
  //Rendering Page
  render(){

    return (
      <div className="App">
        <NavBar />
        <div className="Content">
          <h1>Student<strong>Body</strong></h1>
           < StudentList />
        </div>
    </div>
    );
  }
}

export default AllStudentPage;