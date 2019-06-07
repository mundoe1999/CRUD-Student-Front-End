import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{

  render(){
    return(
      <nav>
        <div className="flex-container">
          <Link to='/'><div className="logo">CAMPUS<strong>CONNECT</strong></div></Link>
          <ul>
            <li><Link to='/StudentInfo'>Students</Link></li>
            <li>Schools</li>
          </ul>
        </div>

      </nav>
    );
  }
}

export default NavBar;

