import { put, call, takeEvery } from 'redux-saga/effects';
import apiService from '../../../services/api.service';
import { Actions, ActionTypes } from './AC';

export function * loginRequestSaga({payload}) {
  try {
    const response = yield call([apiService, apiService.login], payload.data);

    if (response.data.success) {
      yield put(Actions.loginSuccess(response.data));
    }

    yield put(Actions.loginFail(response.data.message));
  } catch (error) {
    yield put(Actions.loginFail(error));
  }
}

export function * loginRequestRootSaga() {
  yield takeEvery(ActionTypes.LOGIN_REQUEST, loginRequestSaga);
}
