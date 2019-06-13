import axios from 'axios';

// ACTION TYPES
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";

// ACTION CEATORS
const fetchAllStudents = (allStudents) =>{
    return{
        type: FETCH_ALL_STUDENTS,
        payload: allStudents
    }
}

// THUNK CREATORS
 export const fetchAllStudentsThunk = () => (dispatch) => {
  return axios
    .get(`/api/students`)
    .then(res => res.data)
    .then(allStudents => dispatch(fetchAllStudents(allStudents)))
    .catch(err => console.log(err));
}

// REDUCER
export default (state = [], action) =>{
    switch (action.type){
        case FETCH_ALL_STUDENTS:
            return action.payload;
        default:
            return state;
    }
}