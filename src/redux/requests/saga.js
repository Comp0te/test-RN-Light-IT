import { all } from 'redux-saga/effects';

import { loginRequestRootSaga } from './login/saga';
import { registerRequestRootSaga } from './register/saga';
import { getAllProductsRequestRootSaga } from './getAllProducts/saga';
import { getAllReviewsRequestRootSaga } from './getAllReviews/saga';

export function * rootRequestsSaga() {
  yield all([
    loginRequestRootSaga(),
    registerRequestRootSaga(),
    getAllProductsRequestRootSaga(),
    getAllReviewsRequestRootSaga(),
  ]);
}
