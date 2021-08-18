import * as TYPES from 'data/types';
import { profileDataSelector, profileIsFetchingSelector } from 'data/selectors/userSelector';

export const fetchUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TYPES.LOAD_USER_REQUEST });
    const response = {};
    // const response = await unsplashAPI.getUserImages(username, currentPage);
    if (profileDataSelector(getState()) === null || profileDataSelector(getState()).length === 0) {
      return dispatch({
        type: TYPES.LOAD_USER_SUCCESS,
        payload: response?.data?.results,
      });
    }
    return null;
  } catch (err) {
    return dispatch({
      type: TYPES.LOAD_USER_FAILURE,
      payload: err,
    });
  }
};
