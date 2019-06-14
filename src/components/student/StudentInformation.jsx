import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import ImageCard from "../essentials/ImageCard";
import { fetchStudentThunk, editStudentThunk, removeStudentThunk } from '../../thunks';
import { connect } from 'react-redux'; 


/*
  Students must contain:
  - firstName -> First Name
  - lastName  -> Last Name
  - email -> In the format of something@other.com
  - imageurl -> the url of said image
  - gpa -> GPA
*/

class StudentInformation extends Component{
  constructor(props){
    super(props);

    this.state = {
      firstName: this.props.currentStudent.firstName,
      lastName: this.props.currentStudent.lastName,
      email: this.props.currentStudent.email,
      gpa: this.props.currentStudent.gpa,
      isHidden: true
      }

    this.blankState = this.state;
    this.ChangeDisplay = this.ChangeDisplay.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);

    //Form Bind
    this.ChangeFirstName = this.ChangeFirstName.bind(this);
    this.ChangeLastName = this.ChangeLastName.bind(this);
    this.ChangeEmail = this.ChangeEmail.bind(this);
    this.ChangeGPA = this.ChangeGPA.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchStudent(this.props.studentId);
  }

  //Button Control
  ChangeDisplay(event){
    console.log("Change!");
    this.setState({
      isHidden: !this.state.isHidden
    });
  }


  ChangeFirstName(event){
    this.setState({
      firstName: event.target.value
    });
    console.log(this.state.firstName);
  }

  ChangeLastName(event){
    this.setState({
      lastName: event.target.value
    });
  }

  ChangeEmail(event){
    this.setState({
      email: event.target.value
    });
  }

  ChangeGPA(event){
    this.setState({
      gpa: event.target.value
    });
  }
  
  deleteStudent(event){
    this.props.deleteStudent(this.props.studentId);
    window.location.href = "http://localhost:3000/Students";
  }


  handleSubmit(event){
    alert('Form has been submitted');

    let newStudent = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gpa: this.state.gpa,
      email: this.state.email
    };
    console.log(newStudent);

    this.props.editStudent(this.props.studentId, newStudent);
    this.props.fetchStudent(this.props.studentId);
    this.ChangeDisplay();
    event.preventDefault();
    
  }

  render(){
    let isFormHidden = this.state.isHidden;
    if(isFormHidden){
      return(
        <div className="UserDisplay">

            <ImageCard imgsrc={this.props.currentStudent.imageURL}/>

            <div className="UserData">
              
              <p>First Name: {this.props.currentStudent.firstName}</p>
              <p>Last Name: {this.props.currentStudent.lastName}</p>
              <p>Email: {this.props.currentStudent.email}</p>
              <p>GPA: {this.props.currentStudent.gpa}</p>
              <hr/>
              <button onClick={this.ChangeDisplay}>Edit Information</button>
            </div>

          </div>
        );
    } else{
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
          First Name:
            <input type="text" value={this.state.firstName} onChange = {this.ChangeFirstName} required/>
            <br/>
            LastName: 
            <input type="text" value={this.state.lastName} onChange = {this.ChangeLastName} required/>
            <br/>
            Email:
            <input type="email" value={this.state.email} onChange = {this.ChangeEmail} required />
            <br/>
            GPA: 
            <input type="number" value={this.state.gpa} step='0.01' onChange = {this.ChangeGPA} min = '0' max = '4'required />
            <br/>
            <input type="submit"/>

          </form>
          <button onClick={this.ChangeDisplay}>Cancel</button>
          <button onClick={this.deleteStudent}>Delete</button>
        </div>
      )
    }

  }
}


function mapState(state, ownprops){
  return { 
    studentId: ownprops.userId,
    currentStudent: state.currentStudent
  }
}
// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (id, updates) => dispatch(editStudentThunk(id, updates)),
    deleteStudent: (id) => dispatch(removeStudentThunk(id))
  }
}

export default connect(mapState, mapDispatch)(StudentInformation);


