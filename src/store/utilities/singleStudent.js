import axios from 'axios';

// ACTION TYPES
const FETCH_STUDENT = "FETCH_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";

// ACTION CEATORS
const fetchStudent = (student) =>{
    return{
        type: FETCH_STUDENT,
        payload: student
    }
}
const addStudent = (student) =>{
    return{
        type: ADD_STUDENT,
        payload: student
    }
}
const editStudent = (student, changes) =>{
    return{
        type: EDIT_STUDENT,
        payload: student, changes
    }
}
const removeStudent = (student) =>{
    return{
        type: REMOVE_STUDENT,
        payload: student
    }
}

// THUNK CREATORS
 export const fetchStudentThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/students/${id}`)
    .then(res => res.data)
    .then(student => dispatch(fetchStudent(student)))
    .catch(err => console.log(err));
}
export const addStudentThunk = (initial) => (dispatch) => {
  return axios
    .post(`/api/students/`,initial)
    .then(res => res.data)
    .then(student => dispatch(addStudent(initial)))
    .catch(err => console.log(err));
}
export const editStudentThunk = (id, changes) => (dispatch) => {
  return axios
    .put(`/api/students/${id}`,changes)
    .then(res => res.data)
    .then(student => dispatch(editStudent(student, changes)))
    .catch(err => console.log(err));
}
export const removeStudentThunk = (id) => (dispatch) => {
    return axios
    .delete(`/api/students/${id}`)
    .then(res => res.data)
    .then(student => dispatch(removeStudent(student)))
    .catch(err => console.log(err));
}

// REDUCER
export default (state = {}, action) =>{
    switch (action.type){
        case FETCH_STUDENT:
            return action.payload;
        case ADD_STUDENT:
            return action.payload;
        case EDIT_STUDENT:
            return action.payload;
        case REMOVE_STUDENT:
            return {};
        default:
            return state;
    }
}