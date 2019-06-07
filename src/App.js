import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Importing pages
import Home from './pages/Home'
import StudentInfoPage from './pages/StudentInfoPage'
import AllCampusPage from './pages/AllCampusPage'

//Importing Stylw
import './Style.css';


class App extends Component{


  render(){
    const HomeComponent = () => (<Home />);
    const StudentInfoComponent = () => (<StudentInfoPage />)
    const AllCampusComponent = () => (<AllCampusPage />)
    return(
      <Router>
        <Route exact path='/' render={HomeComponent}/>
        <Route exact path='/StudentInfo' render={StudentInfoComponent}/>
        <Route exact path='/Campuses' render={AllCampusComponent}/>
      </Router>

    );}


};



export default App;
