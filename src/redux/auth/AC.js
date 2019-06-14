import createAction from '../../utils/actionCreators';

export const ActionTypes = {
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  AUTH_SET_IS_AUTH_USER: 'AUTH_SET_IS_AUTH_USER'
};

export const Actions = {
  logout: () => createAction(ActionTypes.AUTH_LOGOUT),
  setIsAuthUser: data => createAction(ActionTypes.AUTH_SET_IS_AUTH_USER, { data })
};
