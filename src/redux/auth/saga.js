import { put, takeEvery } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as authAC from './AC';
import { requestsAC } from '../requests/AC';

export function* setIsAuthUserSaga() {
  yield put(authAC.Actions.setIsAuthUser(true));
}

export function* invalidTokenSaga(action) {
  const {errors} = action.payload;

  if (errors && errors.status === 401) {
    yield put(authAC.Actions.logout());
  } else if (errors) {
    Alert.alert(errors);
  }
}

export function* authRootSaga() {
  yield takeEvery([
    requestsAC.login.ActionTypes.LOGIN_REQUEST_SUCCESS,
    requestsAC.register.ActionTypes.REGISTER_REQUEST_SUCCESS,
  ], setIsAuthUserSaga);

  yield takeEvery([
    requestsAC.register.ActionTypes.REGISTER_REQUEST_FAIL,
    requestsAC.login.ActionTypes.LOGIN_REQUEST_FAIL,
  ], invalidTokenSaga);
}
