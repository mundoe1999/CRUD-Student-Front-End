import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


import CampusImageCard from '../essentials/CampusImageCard'

/*
  Props must contain:
  - campus object with name, address, description, and imgurl fields
*/


class CampusCard extends Component{
  componentDidMount(){
    //  Should Get the student list;
    }

  render(){
      // Button to generate table
      return (
        <div className="Campus">
          <CampusImageCard imgsrc={this.props.data['imgurl']}/>
          <br/>
          <b>Name:</b> {this.props.data['name']}
          <br/>
          <b>Description:</b> {this.props.data['description']}
          <br/>
          <b>Address:</b> {this.props.data['address']}
          <hr/>
        </div>
        )
  }
}

export default CampusCard;
