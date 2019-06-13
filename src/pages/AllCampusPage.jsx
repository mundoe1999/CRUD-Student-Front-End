import React from 'react';

//Importing essentials
import NavBar from '../components/essentials/NavBar'

//importing Specific Elements
import CampusCard from '../components/campuses/CampusCard'

var campusobj = require('../testfiles/testcampuses.json');
var campuses = campusobj['campuses'];
console.log(campuses)

const AllCampusPage = () => (
  <div className="App">
    <NavBar />
    <div className="Content">
      <h1>Campus<strong>Roster</strong></h1>
      <div className="flex-container">
      {
        campuses.map((campus, index) => {
          return(
            <CampusCard data={campus} num={index}/>
            )} 
          )}
      </div>
    </div>
  </div>
);
 
export default AllCampusPage;