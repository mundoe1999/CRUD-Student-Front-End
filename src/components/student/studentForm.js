import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
  Students must contain:
  - firstName -> First Name
  - lastName  -> Last Name
  - email -> In the format of something@other.com
  - imageurl -> the url of said image
  - gpa -> GPA
*/


class StudentForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      first_name: 'Lorem',
      last_name: 'ipsum',
      email: 'something@other.com',
      imageurl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      gpa: 2.3,
      t_first_name: '',
      t_last_name: '',
      isHidden: false
    };

    /*Binding fucntions*/

    this.FirstNameChange = this.FirstNameChange.bind(this);
    this.LastNameChange = this.LastNameChange.bind(this);

    //Button Instructions
    this.changeToEdit = this.changeToEdit.bind(this);
    this.SubmitButton = this.SubmitButton.bind(this);
  }
  render(){
    if(!this.state.isHidden){

      // Displaying the Student Information
      return (
        <div className="UserDisplay">

          <img src={this.state.imageurl} height='200px' width='200px'/>

          <div className="UserData">
            <div>{this.state.first_name} {this.state.last_name}</div>
            <div>Email: {this.state.email}</div>
            <div>GPA: {this.state.gpa}</div>
            <button onClick={this.changeToEdit}>Edit</button>
          </div>

        </div>
      );
    }
    //Display for Edit information

    else{
      return(
        <div>

          Enter new First name: 
          <input type='text' value={this.state.t_first_name} onChange={this.FirstNameChange}/>
          <br/>
          Enter new Last Name: 
          <input type='text' value={this.state.t_last_name} onChange={this.LastNameChange}/>
          <br />
          <button className="cancelButton" onClick={this.changeToEdit}>Cancel</button>
          <button className="submitButton" onClick={this.SubmitButton}>Submit</button>

        </div>);
    }
}
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

/* 
  Button Functions
*/

changeToEdit(event){
  this.setState({
    isHidden: !this.state.isHidden,
    t_first_name: this.state.first_name,
    t_last_name: this.state.last_name
  });
}

SubmitButton(event){
  //Setting with the new values
  this.setState({
    first_name: this.state.t_first_name,
    last_name: this.state.t_last_name,
    isHidden: !this.state.isHidden
  });
} //End SubmitButton


}

export default StudentForm;

