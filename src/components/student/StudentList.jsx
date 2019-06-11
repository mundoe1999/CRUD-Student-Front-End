import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';



class StudentList extends Component{


  render(){
    
    return(
      <div>
        <Link to="/StudentInfo">Table Goes Here</Link> 
      </div>
      );
    }
}
 

export default StudentList;