import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import './Style.css';

//Importing pages
import Home from './pages/Home';
import StudentInfoPage from './pages/StudentInfoPage';
import AllCampusPage from './pages/AllCampusPage';
import AllStudentPage from './pages/AllStudentPage';
import CampusInfoPage from './pages/CampusInfoPage';

class App extends Component {

  render() {
    const HomeComponent = () => (<Home />);
    const StudentInfoComponent = () => (<StudentInfoPage />);
    const AllCampusComponent = () => (<AllCampusPage />);
    const AllStudentComponent = () => (<AllStudentPage />);
    const CampusInfoPageComponent = () => (<CampusInfoPage/>);
    return( 
      <Provider store={store}>
        <Router>
          <Route exact path='/' render={HomeComponent}/>
          <Route exact path='/StudentInfo' render={StudentInfoComponent}/>
          <Route exact path='/Campuses' render={AllCampusComponent}/>
          <Route exact path='/Students' render={AllStudentComponent}/>
          <Route path='/CampusInfo' render={CampusInfoPageComponent}/>
        </Router>

      </Provider>
    )
  }
}

export default App;