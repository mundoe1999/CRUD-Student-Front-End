import React, {Component} from 'react';
import { connect } from 'react-redux';


class StudentForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      t_first_name: this.props.first_name,
      t_last_name: this.props.last_name,
      t_email: this.props.email,

    };
    //Binding fucntions

    this.FirstNameChange = this.FirstNameChange.bind(this);
    this.LastNameChange = this.LastNameChange.bind(this);
    this.EmailChange = this.LastNameChange.bind(this);

    //Button Instructions
    this.LastNameChange = this.LastNameChange.bind(this);
  }


  render(){
    return(
      <div>
        <form>
          <input type="text" value={this.state.t_first_name} onChange={this.FirstNameChange}/>
          <br/>
          <input type="text" value={this.state.t_last_name} onChange={this.LastNameChange}/>
          <br/>
          <input type="text" value={this.state.t_email} onChange={this.EmailChange}/>
          <br/>
          <button onClick={this.props.displayChange}>Cancel</button>
          <button onClick={this.SubmitChange}>Update</button>
          
        </form>
      </div>
      );
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

EmailChange(event){
  this.setState({
    t_email: event.target.value
  });
} //End EmailChange

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
}



}

const mapStateToProps = (state,ownprops) => {
  return { first_name: state.first_name,
           last_name: state.last_name,
           email: state.email,
           gpa: state.gpa,
          displayChange: ownprops.displayChange};
}

export default connect(mapStateToProps)(StudentForm);