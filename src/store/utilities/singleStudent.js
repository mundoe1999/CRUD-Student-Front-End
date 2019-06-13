import axios from 'axios';

// ACTION TYPES
const FETCH_STUDENT = "FETCH_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";

// ACTION CEATORS
const fetchStudent = (student) =>{
    return{
        type: FETCH_STUDENT,
        payload: student
    }
}
const editStudent = (student) =>{
    return{
        type: EDIT_STUDENT,
        payload: student
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
export const editStudentThunk = (id) => (dispatch) => {
  return axios
    .post(`/api/students`,{
        firstName: "Test_edit_fname",
        lastName: "Test_edit_lname",
        gpa: 3.5,
        imageURL: '',
        email: '',
        campusId: 1
    })
    .then(res => res.data)
    .then(student => dispatch(editStudent(student)))
    .catch(err => console.log(err));
}
export const removeStudentThunk = () => (dispatch) => {
    return dispatch(removeStudent());
}

// REDUCER
export default (state = {}, action) =>{
    switch (action.type){
        case EDIT_STUDENT:
            return action.payload;
        case FETCH_STUDENT:
            return action.payload;
        case REMOVE_STUDENT:
            return {};
        default:
            return state;
    }
}