import { all } from 'redux-saga/effects';

import { loginRequestRootSaga } from './login/saga';
import { registerRequestRootSaga } from './register/saga';

export function * rootRequestsSaga() {
  yield all([
    loginRequestRootSaga(),
    registerRequestRootSaga(),
  ]);
}
