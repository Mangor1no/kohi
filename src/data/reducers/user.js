import * as TYPES from 'data/types';

const initialState = {
  isFetching: false,
  data: [
    {
      id: 0,
    },
  ],
  current: {
    id: 0,
  },
};

const userReducer = (state = initialState, { type, payload }) => {
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
    case TYPES.SIGN_UP_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...state.data, payload],
      };
    case TYPES.SIGN_UP_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.SIGN_IN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        current: payload,
      };
    }
    case TYPES.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        current: {
          id: 0,
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
