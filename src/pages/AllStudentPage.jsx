import React from 'react';
import NavBar from "../components/essentials/NavBar";
import StudentList from '../components/student/StudentList';

const AllStudentPage = () => (
  <div className="App">
    <NavBar />
    <div className="Content">
      <h1>Student<strong>Body</strong></h1>
      <StudentList />
    </div>
  </div>
)
  
export default AllStudentPage;