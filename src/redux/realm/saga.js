import { put, takeEvery, call } from 'redux-saga/effects';
import * as realmAC from './AC';
import * as authAC from '../auth/AC';
import { requestsAC } from '../requests/AC';

import realmService from '../../services/realm.service';

export function* getTokenFromRealmSaga() {
  yield call([realmService, realmService.initialize]);
  const auth = yield call([realmService, realmService.read], realmService.SchemaName.AUTH);
  const token = auth?.[0]?.token;

  if (token) {
    yield put(authAC.Actions.setToken(auth[0].token))
  }
}

export function* writeTokenToRealmSaga({payload}) {
  yield call(
    [realmService, realmService.write],
    realmService.SchemaName.AUTH,
    {
      id: realmService.SchemaName.AUTH,
      token: payload.data.token,
    },
  );
}

export function* realmRootSaga() {
  yield takeEvery([
    realmAC.ActionTypes.REHYDRATE_STORE,
  ], getTokenFromRealmSaga);

  yield takeEvery([
    requestsAC.login.ActionTypes.LOGIN_REQUEST_SUCCESS,
    requestsAC.register.ActionTypes.REGISTER_REQUEST_SUCCESS,
  ], writeTokenToRealmSaga);
}
