import * as TYPES from 'data/types';

const initialState = {
  isFetching: false,
  data: null,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.LOAD_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.LOAD_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload,
      };
    case TYPES.LOAD_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
