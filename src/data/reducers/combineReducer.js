import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

/**
 * Final Reducer
 */
const appReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export default appReducer;
