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



/* ORIGINAL IMPLEMENTATION BELOW */

/*
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
*/



/* ALTERNATE IMPLEMENTATION FROM AJ */

/*
// Smart container;
class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.blankState = this.state;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchStudent(this.state.lastName, this.state.firstName);
  }

  handleReset = (event) => {
    event.preventDefault();
    this.props.removeStudent();
    this.setState(this.blankState);
  }

  render() {
    return (
      <AppView
        currentStudent={this.props.currentStudent}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleReset={this.handleReset}
        studentInfo={this.state}
      />
    );
  }
}

// Map state to props;
function mapState(state) {
  return {
    currentStudent: state.currentStudent
  }
}

// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchStudent: (lastName, firstName) => dispatch(fetchStudentThunk(lastName, firstName)),
    removeStudent: () => dispatch(removeStudentThunk())
  }
}

// Export our store-connected component;
export default connect(mapState, mapDispatch)(AppContainer);

*/