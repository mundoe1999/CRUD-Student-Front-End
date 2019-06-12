import React from 'react';
//import PropTypes from 'prop-types';
import ImageCard from "../essentials/ImageCard";

/*
  Students must contain:
  - firstName -> First Name
  - lastName  -> Last Name
  - email -> In the format of something@other.com
  - imageurl -> the url of said image
  - gpa -> GPA
*/

const StudentInformation = (props) => {
  const { currentStudent, handleChange, handleSubmit, first_name,  } = props;
  return(
    <div className="App">

      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="first_name" value={first_name} onChange={handleChange} required></input>
          <br></br>
          <button>Display Player</button>
        </form>
      </header>
    </div>
  );
};

export default StudentInformation;
/*
const mapStateToProps = (state,ownprops) => {
  return { first_name: state.first_name,
           last_name: state.last_name,
           email: state.email,
           gpa: state.gpa,
           imageurl: state.imageurl,
          buttonChange: ownprops.buttonChange};
}

export default connect(mapStateToProps)(StudentInformation);
*/



/* ORIGINAL IMPLEMENTATION BELOW */

/*
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

    //Binding fucntions

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

          <ImageCard imgsrc={this.state.imageurl}/>

          <div className="UserData">
            <div>
              <h2>{this.state.first_name} {this.state.last_name}</h2>
              <br></br>
            </div>
            <p>
              Email: {this.state.email}
            <br></br>
            <br></br>
              GPA: {this.state.gpa}
            </p>
            <hr/>
            <button onClick={this.changeToEdit}>Edit Information</button>
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

 
//Button Functions


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
*/
