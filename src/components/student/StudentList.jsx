import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchAllStudentsThunk, addStudentThunk } from "../../thunks"

// import ImageCard from '../essentials/ImageCard'

/*
  Props must contain:
  - campus -> Exact name of campus
  - studentlist  -> Array of student objects
*/


class StudentList extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      isHidden: true
      }

      this.ChangeDisplay = this.ChangeDisplay.bind(this);
    //Form Bind
    this.ChangeFirstName = this.ChangeFirstName.bind(this);
    this.ChangeLastName = this.ChangeLastName.bind(this);
    this.ChangeEmail = this.ChangeEmail.bind(this);
    this.ChangeGPA = this.ChangeGPA.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.props.fetchAllStudents();
  }

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

  handleSubmit(event){
  
    let newStudent = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gpa: this.state.gpa,
      email: this.state.email,
      createdAt: "1"
    };
    console.log(newStudent);


    this.props.addSingularStudent(newStudent);
    this.props.fetchAllStudents();
    this.ChangeDisplay();
    event.preventDefault();
    
  }



  render(){

    let isFormHidden = this.state.isHidden;
    if(isFormHidden){
      return (
        <div>
          <button onClick={this.ChangeDisplay}>Add Student</button>
          <table id= "StudentListing">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>GPA</th>
              <th>Link</th>
            </tr>
          {
            this.props.allStudents.map((student) => {
              return(
                
                <tr>
                  <td>{student['firstName']}</td>
                  <td>{student['lastName']}</td>
                  <td>{student['email']}</td>
                  <td>{student['gpa']}</td>
                  <td><Link to={`/Students/${student["id"]}`}>Click</Link></td>
                </tr>
                
              )
            })
          }
          </table>

        </div>
        )
    } else{
      return (
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

          <input type="submit" value="Add Student"/>
        </form>

        <button onClick={this.ChangeDisplay}>Cancel</button>
      </div>
      )
    }

  }
}

function mapState(state){
  return { 

    allStudents: state.allStudents
  }
}
// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    addSingularStudent: (initial) => dispatch(addStudentThunk(initial))
  }
}

export default connect(mapState, mapDispatch)(StudentList);
