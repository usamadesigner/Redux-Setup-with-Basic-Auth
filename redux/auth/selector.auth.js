import {createSelector} from 'reselect';

const auth = state => state.Auth;

export const errorSelector = createSelector(auth, data => ({
  data: data?.get('error'),
}));

export const isLoadingSelector = createSelector(auth, data => (data?.get('isLoading')));

export const Authorization = createSelector(auth, data => (   data?.get('isAuthenticated')));


