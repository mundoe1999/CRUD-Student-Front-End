import React, { Component } from 'react';
import { fetchCampusThunk, editCampusThunk, removeCampusThunk } from '../../thunks';
import { connect } from 'react-redux'; 

//import PropTypes from 'prop-types';
import CampusImageCard from "../essentials/CampusImageCard";





class CampusInformation extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      address: '',
      description: '',
      imageURL: '',
      isHidden: true
      }


    this.blankState = this.state;

    //Form Bind
    this.changeName = this.changeName.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeImage = this.changeImage.bind(this);

    //Data Processing
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteCamp = this.deleteCamp.bind(this);

    //Misc
    this.ChangeDisplay = this.ChangeDisplay.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchCampus(this.props.campusId);

  }

  //Button Control
  ChangeDisplay(event){
    console.log("Change!");
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  /*
  Form Editing Functions
  */

  changeName(event){
    this.setState({
      name: event.target.value
    });
  }

  changeAddress(event){
    this.setState({
      address: event.target.value
    });
  }

  changeDescription(event){
    this.setState({
      description: event.target.value
    })
  }

  changeImage(event){
    this.setState({
      imageURL: event.target.value
    })
  }

  
  deleteCamp(event){
    this.props.deleteCampus(this.props.campusId);
    window.location.href = "http://localhost:3000/Campuses";
  }


  handleSubmit(event){
    let newCampus = {
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageURL
      
    };

    console.log(newCampus);
    console.log(this.props.campusId);
    alert('Form has been submitted');

    this.props.editCampus(this.props.campusId, newCampus);
    this.props.fetchCampus(this.props.campusId);
    this.ChangeDisplay();
    event.preventDefault();
    
  }

  render(){
    let isFormHidden = this.state.isHidden;
    if(isFormHidden){
      return(
        <div className="UserDisplay">

            <CampusImageCard imgsrc={this.props.currentCampus.imageURL}/>

            <div className="UserData">
              
              <h2>{this.props.currentCampus.name}</h2>
              <p>Address: {this.props.currentCampus.address}</p>
              <p>Description: {this.props.currentCampus.description}</p>
              <hr/>
              <button onClick={this.ChangeDisplay}>Edit Information</button>
            </div>

          </div>
        );
    } else{
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
          Campus Name:
            <input type="text" value={this.state.name} onChange = {this.changeName} required/>
            <br/>
            Address 
            <input type="text" value={this.state.address} onChange = {this.changeAddress} required/>
            <br/>
            Description
            <textarea onChange={this.changeDescription}>{this.state.description}</textarea>
            <br/>
            Image *
            <input type="text" value={this.state.imageURL} onChange = {this.changeImage} />
            <br/>
            

            
            <input type="submit"/>
          </form>
          <button onClick={this.ChangeDisplay}>Cancel</button>
          <button onClick={this.deleteCamp}>Delete</button>
        </div>
      )
    }

  }
}


function mapState(state, ownprops){
  return { 
    campusId: ownprops.userId,
    currentCampus: state.currentCampus
  }
}
// Map dispatch to props;
function mapDispatch(dispatch) {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (id, updates) => dispatch(editCampusThunk(id, updates)),
    deleteCampus: (id) => dispatch(removeCampusThunk(id))
  }
}

export default connect(mapState, mapDispatch)(CampusInformation);
