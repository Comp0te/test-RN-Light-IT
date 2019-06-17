import { put, call, takeEvery } from 'redux-saga/effects';
import apiService from '../../../services/api.service';
import { Actions, ActionTypes } from './AC';

export function * registerRequestSaga({payload}) {
  try {
    const response = yield call([apiService, apiService.register], payload.data);

    if (response.data.success) {
      yield put(Actions.registerSuccess(response.data));
    }

    yield put(Actions.registerFail(response.data.message));
  } catch (error) {
    yield put(Actions.registerFail(error));
  }
}

export function * registerRequestRootSaga() {
  yield takeEvery(ActionTypes.REGISTER_REQUEST, registerRequestSaga);
}
