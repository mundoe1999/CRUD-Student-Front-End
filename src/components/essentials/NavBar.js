import React, { Component } from 'react';


class NavBar extends Component{

  render(){
    return(
      <nav>
        <div className="flex-container">
          <div className="logo">CAMPUS<strong>CONNECT</strong></div>
          <ul>
            <li>Students</li>
            <li>Schools</li>
          </ul>
        </div>

      </nav>
    );
  }
}

export default NavBar;

