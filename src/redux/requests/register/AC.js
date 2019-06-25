import createAction from '../../../utils/actionCreators';

export const ActionTypes = {
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_REQUEST_SUCCESS: 'REGISTER_REQUEST_SUCCESS',
  REGISTER_REQUEST_FAIL: 'REGISTER_REQUEST_FAIL',
};

export const Actions = {
  register: data => createAction(ActionTypes.REGISTER_REQUEST, { data }),
  registerSuccess: data => createAction(ActionTypes.REGISTER_REQUEST_SUCCESS, { data }),
  registerFail: errors => createAction(ActionTypes.REGISTER_REQUEST_FAIL, { errors }),
};
