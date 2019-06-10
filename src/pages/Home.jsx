import React, { Component } from 'react';
import NavBar from '../components/essentials/NavBar'
//importing Specific Elements
import StudentList from '../components/student/StudentList';

class Home extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          Collecting the Campus Information, just for you
          <StudentList length="5"/>
        </div>
    </div>
    );
  }
}

export default Home;