import { combineReducers } from 'redux';
import authUser from './authUser';
import questions from './questions';
import users from './users';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
})