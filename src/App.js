import React, { Component } from 'react';
import PropTypes from 'prop-types';


import StudentForm from './components/student/studentForm';
import NavBar from './components/essentials/NavBar';
import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <StudentForm/>
      </div>

    </div>
  );
}

export default App;
