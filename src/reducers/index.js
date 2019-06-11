// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store;

function StudentRelated(state, type){
  if(typeof state === undefined){
    state = 0;
    return;
  }
  switch (type.action){
    case 'GET_STUDENT':
      //Should Look up Student with Given ID, and update
      //Redux with Student Information
      break;
    case 'UPDATE_STUDENT':
      //Should update student with the new given information
      //And should update the sql table while at it
      break;
    case 'DELETE_STUDENT':
      //Should delete the student from the sql table
      break;
  }

}

export default(state) => {
    return state
}

