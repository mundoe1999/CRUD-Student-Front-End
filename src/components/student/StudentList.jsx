import React, { Component } from 'react';
import PropTypes from 'prop-types';


// import ImageCard from '../essentials/ImageCard'

/*
  Props must contain:
  - length -> Number of list elements
  - studentlist  -> Array of student objects
*/


class StudentList extends Component{
  constructor(props){
    super(props);
    this.state = {
      'length': this.props.length,
      'studentlist': this.props.studentlist
    };

    this.generate_table = this.generate_table.bind(this);
  }
  render(){

      // Button to generate table
      return (
        <div>
        <input type = "button" value = "Generate table" onClick ={this.generate_table}/>
          <body id="test">
          </body>
        </div>
        )
}

generate_table(e) {
  // get the reference for the body
  var body = document.getElementById("test");

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  tbl.id = "StudentList"
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < this.state.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 5; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      switch(j){
        case '0':
          var cellText = document.createTextNode(this.studentlist[i].fname);
          break;
        case '1':
          var cellText = document.createTextNode(this.studentlist[i].lname);
          break;
        case '2':
          var cellText = document.createTextNode(this.studentlist[i].email);
          break;
        case '3':
          var cellText = document.createTextNode(this.studentlist[i].gpa);
          break;
        case '4':
          var cellText = document.createTextNode(this.studentlist[i].campus);
          break;
        default:
          var cellText = "error";
      }
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}


}

export default StudentList;

