import * as TYPES from 'data/types';

const initialState = {
  isFetching: false,
  data: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.GET_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload,
      };
    case TYPES.GET_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.ADD_TO_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...state.data, payload],
      };
    case TYPES.ADD_TO_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: state.data.filter((item) => item.id !== payload.id),
      };
    case TYPES.REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default userReducer;
