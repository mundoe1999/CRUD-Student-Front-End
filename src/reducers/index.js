// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store;
export { default as currentStudent } from '../store/utilities/singleStudent';
export { default as allStudents } from '../store/utilities/allStudents';
export { default as currentCampus } from '../store/utilities/singleCampus';
export { default as allCampuses } from '../store/utilities/allCampuses';
