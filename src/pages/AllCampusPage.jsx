import React, { Component } from 'react';

//Importing essentials
import NavBar from '../components/essentials/NavBar'


//importing Specific Elements

class AllCampusPage extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="Content">
          <h1>Campus<strong>Roster</strong></h1>
          All Campus information goes here
        </div>
    </div>
    );
  }
}

export default AllCampusPage;