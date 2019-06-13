import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';


//Importing pages
import Home from './pages/Home';
import StudentInfoPage from './pages/StudentInfoPage';
import AllCampusPage from './pages/AllCampusPage';
import AllStudentPage from './pages/AllStudentPage';

class App extends Component {

  render() {
    const HomeComponent = () => (<Home />);
    const StudentInfoComponent = () => (<StudentInfoPage />);
    const AllCampusComponent = () => (<AllCampusPage />);
    const AllStudentComponent = () => (<AllStudentPage />);
    return( 

        <Router>
          <Switch>
          <Route exact path='/' render={HomeComponent}/>
          <Route path='/Students/:userId' render={StudentInfoComponent}/>
          <Route exact path='/Campuses' render={AllCampusComponent}/>
          <Route exact path='/Students' render={AllStudentComponent}/>
          </Switch>

        </Router>

    )
  }
}

export default App;