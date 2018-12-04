import { combineReducers } from 'redux';
import { RouterReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ posts, comments, router: RouterReducer });

export default rootReducer;
