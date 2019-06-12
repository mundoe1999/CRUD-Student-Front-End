import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
//import AppView from './AppView';

//Import Redux store library and components
import reducer from "./reducers";
import { createStore } from "redux";

//Importing Style
import './Style.css';

//Importing pages
import Home from './pages/Home';
import StudentInfoPage from './pages/StudentInfoPage';
import AllCampusPage from './pages/AllCampusPage';
import AllStudentPage from './pages/AllStudentPage';

const student = {
      first_name: 'Lorem',
      last_name: 'ipsum',
      email: 'something@other.com',
      gpa: 2.3,
      imageurl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',

    };
const store = createStore(reducer, student);

class App extends Component {

  //Fetch the student and campus information HERE
  //And Place it to the STORE
  componentDidMount(){

  }
  
  render() {
    const HomeComponent = () => (<Home />);
    const StudentInfoComponent = () => (<StudentInfoPage />);
    const AllCampusComponent = () => (<AllCampusPage />);
    const AllStudentComponent = () => (<AllStudentPage />);
    return( 
      <Provider store={store}>
        <Router>
          <Route exact path='/' render={HomeComponent}/>
          <Route exact path='/StudentInfo' render={StudentInfoComponent}/>
          <Route exact path='/Campuses' render={AllCampusComponent}/>
          <Route exact path='/Students' render={AllStudentComponent}/>
        </Router>

      </Provider>
    )
  }
}

export default App;

