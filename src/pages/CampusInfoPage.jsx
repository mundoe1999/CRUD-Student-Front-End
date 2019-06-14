import React, { Component } from 'react';
import {withRouter} from 'react-router';

//Importing essentials
import NavBar from "../components/essentials/NavBar";

//importing Specific Elements
import CampusInformation from '../components/campus/CampusInformation';
class CampusInfoPage extends Component {


  //Rendering Page
  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="Content">
          <h1>Campus<strong>Profile</strong></h1>
          <CampusInformation userId={this.props.match.params.userId}/>
          <b>Students</b>
        </div>
    </div>
    );
  }
}

export default withRouter(CampusInfoPage);