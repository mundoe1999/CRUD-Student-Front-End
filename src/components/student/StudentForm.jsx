import React, {Component} from 'react';
import { editStudentThunk } from '../../thunks';
import { removeStudentThunk } from '../../thunks';
import { connect } from 'react-redux'; 

//Importing pages
import StudentInformation from './StudentInformation';

class StudentForm extends Component{
  constructor(){
    super();
    this.state = {
      first_name: "Lorem",
      last_name: "ipsum",
      email: "something@other.com",
      gpa: 2.3,
      }
    this.blankState = this.state;
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editStudent(this.state.first_name, this.state.last_name);
  }

  render(){
    return(
      <StudentInformation
        currentStudent={this.props.currentStudent}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        first_name={this.state.first_name}
        last_name={this.state.last_name}
      />
      );
    }

/*
FirstNameChange(event){
  this.setState({
    t_first_name: event.target.value
  });
} //End FirstNameChange

LastNameChange(event){
  this.setState({
    t_last_name: event.target.value
  });
} //End LastNameChange

EmailChange(event){
  this.setState({
    t_email: event.target.value
  });
} //End EmailChange

  render() {
    return (
      <AppView
        currentPlayer={this.props.currentPlayer}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleReset={this.handleReset}
        playerInfo={this.state}
      />
    );
  }

SubmitChange(event){
  //Call Reducer Methods to change the Store Value

  //Go back to Student Display
  this.props.displayChange(event);
}

 
//Button Functions

changeToEdit(event){
  this.setState({
    isHidden: !this.state.isHidden,
    t_first_name: this.state.first_name,
    t_last_name: this.state.last_name
  });
}*/
}

function mapState(state){
  return { 
    currentStudent: state.currentStudent
  }
}
// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    editStudent: (first_name, last_name) => dispatch(editStudentThunk(first_name, last_name)),
  }
}

export default connect(mapState, mapDispatch)(StudentForm);