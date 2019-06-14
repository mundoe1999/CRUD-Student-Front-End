import axios from 'axios';

// ACTION TYPES
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";

// ACTION CEATORS
const fetchAllCampuses = (campuses) =>{
    return{
        type: FETCH_ALL_CAMPUSES,
        payload: campuses
    }
}

// THUNK CREATORS
 export const fetchAllCampusesThunk = () => (dispatch) => {
  return axios
    .get(`/api/campuses`)
    .then(res => res.data)
    .then(campuses => dispatch(fetchAllCampuses(campuses)))
    .catch(err => console.log(err));
}

// REDUCER
export default (state = [], action) =>{
    switch (action.type){
        case FETCH_ALL_CAMPUSES:
            return action.payload;
        default:
            return state;
    }
}