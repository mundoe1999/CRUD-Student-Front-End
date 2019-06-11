import React from 'react';
//import './App.css';

const AppView = (props) => {
  const { currentStudent, handleChange, handleSubmit, handleReset, studentInfo } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>{`${currentStudent.school_name || ""}`}</p>
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="firstName" value={studentInfo.firstName} onChange={handleChange} required></input>
          <br></br>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={studentInfo.lastName} onChange={handleChange} required></input>
          <br></br>
          <button>Display Student</button>
        </form>
        <button onClick={handleReset}>Reset</button>
      </header>
    </div>
  );
};

export default AppView;
