import React, {Component} from 'react';
import { fetchAllCampusesThunk, addCampusThunk } from '../../thunks';
import { connect } from 'react-redux';
import CampusCard from './CampusCard';

class CampusList extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: 'test',
      address: 'test',
      description: 'tes',
      imageURL: 'tes',
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

    //Misc
    this.ChangeDisplay = this.ChangeDisplay.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchCampuses();

  }

  //Button Control
  ChangeDisplay(event){
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
    });
  }

  changeImage(event){
    this.setState({
      imageURL: event.target.value
    });
  }

  handleSubmit(event){
    let newCampus = {
      name: this.state.name,
      address: this.state.address,
      description: "something",
      imageUrl: this.state.imageURL,
      createdAt: "1"
    };

    alert('Form has been submitted');

    this.props.addSingularCampus(newCampus);
    this.props.fetchCampuses();
    this.ChangeDisplay();
    event.preventDefault();
  }
  
  render(){
    let isFormHidden = this.state.isHidden;
    if(isFormHidden){
      return(
        <div>
          <button onClick={this.ChangeDisplay}>Add Campus</button>
          <div className="flex-container">
          {
            this.props.allCampuses.map((campus) => {
              return(
                <CampusCard data={campus} />
              )
            })
          }
        </div>
        </div>
  
      )
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
          <input type="submit" value="Add New Campus"/>
        </form>
        <button onClick={this.ChangeDisplay}>Cancel</button>
      </div>
      )

    }

  }
}

function mapState(state){
  return {
    allCampuses: state.allCampuses
  }
}

function mapDispatch(dispatch){
  return {
    fetchCampuses: () => dispatch(fetchAllCampusesThunk()),
    addSingularCampus: () => dispatch(addCampusThunk())
  }
}

export default connect(mapState, mapDispatch)(CampusList);