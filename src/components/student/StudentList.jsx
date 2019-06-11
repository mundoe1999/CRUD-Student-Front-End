import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


// import ImageCard from '../essentials/ImageCard'

/*
  Props must contain:
  - length -> Number of list elements
  - studentlist  -> Array of student objects
*/


class StudentList extends Component{
  constructor(){
    var testdata = require('../../testfiles/teststudents.json')
    super();
    this.state = {
      'length': Object.keys(testdata.students).length,
      'studentlist': testdata
    };

    this.generate_table = this.generate_table.bind(this);
  }
  render(){
      // Button to generate table
      return (
        <div>
          <body id="test">
          </body>
        </div>
        )
  }

  componentDidMount(){
    this.generate_table();
  }

generate_table() {
  // get the reference for the body
  var body = document.getElementById("test");

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  tbl.id = "StudentList"
  var tblBody = document.createElement("tbody");

  // creating all cells
  console.log(this.state.length);
  for (var i = 0; i < this.state.length ; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 5; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      switch(j){
        case 0:
          var cellText = document.createTextNode(this.state.studentlist.students[i].fname);
          break;
        case 1:
          var cellText = document.createTextNode(this.state.studentlist.students[i].lname);
          break;
        case 2:
          var cellText = document.createTextNode(this.state.studentlist.students[i].email);
          break;
        case 3:
          var cellText = document.createTextNode(this.state.studentlist.students[i].gpa);
          break;
        case 4:
          var cellText = document.createTextNode(this.state.studentlist.students[i].campus);
          break;
        default:
          var cellText = "error";
      }
      console.log(typeof cellText);
      console.log(cellText);
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
