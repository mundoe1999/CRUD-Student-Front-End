import axios from 'axios';

// ACTION TYPES
const FETCH_CAMPUS = "FETCH_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const EDIT_CAMPUS = "EDIT_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";

// ACTION CEATORS
const fetchCampus = (campus) =>{
    return{
        type: FETCH_CAMPUS,
        payload: campus
    }
}
const addCampus = (campus) =>{
    return{
        type: ADD_CAMPUS,
        payload: campus
    }
}
const editCampus = (campus, changes) =>{
    return{
        type: EDIT_CAMPUS,
        payload: campus, changes
    }
}
const removeCampus = (campus) =>{
    return{
        type: REMOVE_CAMPUS,
        payload: campus
    }
}

// THUNK CREATORS
export const fetchCampusThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/campuses/${id}`)
    .then(res => res.data)
    .then(campus => dispatch(fetchCampus(campus)))
    .catch(err => console.log(err));
}
export const addCampusThunk = (initial) => (dispatch) => {
  return axios
    .post(`/api/campuses/`,initial)
    .then(res => res.data)
    .then(student => dispatch(addCampus(initial)))
    .catch(err => console.log(err));
}
export const editCampusThunk = (id, changes) => (dispatch) => {
  return axios
    .get(`/api/campuses`)
    .then(res => res.data)
    .then(campus => dispatch(editCampus(id, changes)))
    .catch(err => console.log(err));
}
export const removeCampusThunk = (id) => (dispatch) => {
    return axios
    .delete(`/api/campuses/${id}`)
    .then(res => res.data)
    .then(student => dispatch(removeCampus(student)))
    .catch(err => console.log(err));
}

// REDUCER
export default (state = {}, action) =>{
    switch (action.type){
        case FETCH_CAMPUS:
            return action.payload;
        case ADD_CAMPUS:
            return action.payload;
        case EDIT_CAMPUS:
            return action.payload;
        case REMOVE_CAMPUS:
            return {};
        default:
            return state;
    }
}