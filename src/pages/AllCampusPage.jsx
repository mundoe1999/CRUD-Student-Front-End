import React from 'react';
/*
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchAllCampusesThunk } from "../../thunks";
*/
//Importing essentials
import NavBar from '../components/essentials/NavBar'

//importing Specific Elements
import CampusList from '../components/campus/CampusList'


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