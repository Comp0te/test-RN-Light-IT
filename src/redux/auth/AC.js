import createAction from '../../utils/actionCreators';

export const ActionTypes = {
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  AUTH_SET_TOKEN: 'AUTH_SET_TOKEN',
};

export const Actions = {
  logout: () => createAction(ActionTypes.AUTH_LOGOUT),
  setToken: data => createAction(ActionTypes.AUTH_SET_TOKEN, { data }),
};
