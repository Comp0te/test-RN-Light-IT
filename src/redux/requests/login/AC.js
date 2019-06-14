import createAction from '../../../utils/actionCreators';

export const ActionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAIL: 'LOGIN_REQUEST_FAIL',
};

export const Actions = {
  login: data => createAction(ActionTypes.LOGIN_REQUEST, { data }),
  loginSuccess: data => createAction(ActionTypes.LOGIN_REQUEST_SUCCESS, { data }),
  loginFail: errors => createAction(ActionTypes.LOGIN_REQUEST_FAIL, { errors }),
};
