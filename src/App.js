import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';


//Importing pages
import Home from './pages/Home'
import StudentInfoPage from './pages/StudentInfoPage'

import StudentForm from './components/student/StudentForm';

import logo from './logo.svg';
import './Style.css';


class App extends Component{

/*
      <div className="App">
        <NavBar />
        <div className="App-header">
          <StudentForm/>
        </div>
             </div>
*/
//        <Route exact path='/campuses' render={}/>

  render(){
    const HomeComponent = () => (<Home />);
    const StudentInfoComponent = () => (<StudentInfoPage />)
    return(
      <Router>
        <Route exact path='/' render={HomeComponent}/>
        <Route exact path='/StudentInfo' render={StudentInfoComponent}/>
      </Router>

    );}


};



export default App;
