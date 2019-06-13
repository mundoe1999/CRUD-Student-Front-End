import axios from 'axios';

// ACTION TYPES
const EDIT_CAMPUS = "EDIT_CAMPUS";
const FETCH_CAMPUS = "FETCH_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";

// ACTION CEATORS
const editCampus = (campus) =>{
    return{
        type: EDIT_CAMPUS,
        payload: campus
    }
}
const fetchCampus = (campus) =>{
    return{
        type: FETCH_CAMPUS,
        payload: campus
    }
}
const removeCampus = (campus) =>{
    return{
        type: REMOVE_CAMPUS,
        payload: campus
    }
}

// THUNK CREATORS
 export const editCampusThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/campuses`)
    .then(res => res.data)
    .then(campus => dispatch(editCampus(campus)))
    .catch(err => console.log(err));
}
 export const fetchCampusThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/campuses/${id}`)
    .then(res => res.data)
    .then(campus => dispatch(fetchCampus(campus)))
    .catch(err => console.log(err));
}
export const removeCampusThunk = () => (dispatch) => {
    return dispatch(removeCampus());
}

// REDUCER
export default (state = {}, action) =>{
    switch (action.type){
        case EDIT_CAMPUS:
            return action.payload;
        case FETCH_CAMPUS:
            return action.payload;
        case REMOVE_CAMPUS:
            return {};
        default:
            return state;
    }
}