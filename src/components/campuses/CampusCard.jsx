import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';


import CampusImageCard from '../essentials/CampusImageCard'

/*
  Props must contain:
  - campus object with name, address, description, and imgurl fields
*/


class CampusCard extends Component{
  constructor(props)
  {
    super(props);
    console.log(this.props.location);
    this.state={
      isHidden: false
    }
  }

  componentDidMount(){
    //  Should Get the student list;
    if(this.props.location.pathname.includes("CampusInfo"))
      document.getElementById("link").style.display = 'none';
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
          <br/>
          <Link id="link" to={`CampusInfo/${this.props.num}`}><b>Link</b></Link>
          <hr/>
        </div>
        )
  }
}

export default withRouter(CampusCard);
