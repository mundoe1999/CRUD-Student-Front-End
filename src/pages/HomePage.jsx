import React, { Component } from 'react';
import NavBar from '../components/essentials/NavBar'


class Home extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          Collecting the Campus Information, just for you
        </div>
    </div>
    );
  }
}

export default Home;