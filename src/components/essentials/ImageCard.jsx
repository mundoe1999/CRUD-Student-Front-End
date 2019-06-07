import React, {Component} from 'react';


class ImageCard extends Component {
  render(){
    return(

        <img className="ImageCard" src={this.props.imgsrc}/>

    );
  }
}

export default ImageCard;