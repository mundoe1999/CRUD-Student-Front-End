import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CampusImageCard from '../essentials/CampusImageCard'

class CampusCard extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      isHidden: false
    }
  }

  render(){

      return (
        <div className="Campus">
          <CampusImageCard imgsrc={this.props.data['imageURL']}/>
          <br/>
          <b>Name:</b> {this.props.data['name']}
          <br/>
          <b>Description:</b> {this.props.data['description']}
          <br/>
          <b>Address:</b> {this.props.data['address']}
          <br/>
          <Link id="link" to={`Campuses/${this.props.data['id']}`}><b>Link</b></Link>
          <hr/>
        </div>
        )
  }
}

export default CampusCard;
