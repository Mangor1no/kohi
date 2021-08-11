import { createSelector } from 'reselect';

export const getProfile = (state) => state.user;

export const profileIsFetchingSelector = createSelector(getProfile, (user) => user.isFetching);
export const profileDataSelector = createSelector(getProfile, (user) => user.data);
