import * as TYPES from 'data/types';
import { cartItemSelector } from 'data/selectors/cartSelector';

export const addToCart = (payload) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.ADD_TO_CART_REQUEST });
    return dispatch({
      type: TYPES.ADD_TO_CART_SUCCESS,
      payload,
    });
  } catch (err) {
    return dispatch({
      type: TYPES.ADD_TO_CART_FAILURE,
    });
  }
};

export const removeFromCart = (payload) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.ADD_TO_CART_REQUEST });
    return dispatch({
      type: TYPES.ADD_TO_CART_SUCCESS,
      payload,
    });
  } catch (err) {
    return dispatch({
      type: TYPES.ADD_TO_CART_FAILURE,
    });
  }
};
