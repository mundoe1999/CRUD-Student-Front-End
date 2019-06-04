import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Student from './components/student';
import logo from './logo.svg';
import './App.css';


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

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-header"></div>

    </div>
  );
}

export default App;
