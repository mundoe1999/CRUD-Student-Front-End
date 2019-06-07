import axios from 'axios';

// ACTION TYPES;
const FETCH_STUDENT = "FETCH_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";

// ACTION CREATORS;
const fetchStudent = (student) => {
  return {
    type: FETCH_STUDENT,
    payload: student
  }
}

const removeStudent = () => {
  return {
    type: REMOVE_STUDENT
  }
}

// THUNK CREATORS;
export const fetchStudentThunk = (lastName, firstName) => (dispatch) => {
  return axios
    .get(`https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`)
    .then(res => res.data)
    .then(someStudent => dispatch(fetchStudent(someStudent)))
    .catch(err => console.log(err));
}

export const removeStudentThunk = () => (dispatch) => {
  return dispatch(removeStudent());
}

// REDUCER;
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    case REMOVE_STUDENT:
      return {};
    default:
      return state;
  }
}
