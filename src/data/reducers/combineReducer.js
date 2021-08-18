import { combineReducers } from 'redux';
import cartReducer from './cart';
import userReducer from './user';

/**
 * Final Reducer
 */
const appReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export default appReducer;
