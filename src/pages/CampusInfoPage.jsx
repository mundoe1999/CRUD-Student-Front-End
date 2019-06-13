import React, { Component } from 'react';

//Importing essentials
import NavBar from "../components/essentials/NavBar";

//importing Specific Elements
import CampusCard from '../components/campuses/CampusCard';
import StudentList from '../components/student/StudentList';

var campusobj = require('../testfiles/testcampuses.json');
var campuses = campusobj['campuses'];
var urlLength = 33;

class CampusInfoPage extends Component {

  componentWillMount(){
    try{
      var test = campuses[window.location.href.substr(urlLength)]['name']
    }
    catch(e){
      console.log(campuses[window.location.href.substr(urlLength)]['name'])
   }
  }

  //Rendering Page
  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="Content">
          <h1>Campus<strong>Profile</strong></h1>
          <CampusCard data={campuses[window.location.href.substr(urlLength)]}/>
          <b>Students</b>
          <StudentList campus={campuses[window.location.href.substr(urlLength)]['name']}/>
        </div>
    </div>
    );
  }
}

export default CampusInfoPage;