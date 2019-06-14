import React from 'react';
import NavBar from '../components/essentials/NavBar';
import CampusList from '../components/campus/CampusList';

const AllCampusPage = () => (
  <div className="App">
    <NavBar />
    <div className="Content">
      <h1>Campus<strong>Roster</strong></h1>
      <CampusList />
    </div>
  </div>
);
 
export default AllCampusPage;