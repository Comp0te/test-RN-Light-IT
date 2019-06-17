import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from 'redux-saga/effects';

import { authReducer } from './auth/reducer';
import { requestsReducer } from './requests/reducers';
import { productsReducer } from './products/reducers';
import { reviewsReducer } from './reviews/reducers';

import { authRootSaga } from './auth/saga';
import { requestsRootSaga } from './requests/saga';
import { productsRootSaga } from './products/saga';
import { reviewsRootSaga } from './reviews/saga';

export const rootReducer = combineReducers({
  auth: authReducer,
  requests: requestsReducer,
  products: productsReducer,
  reviews: reviewsReducer,
});

function* rootSaga() {
  yield all([
    authRootSaga(),
    requestsRootSaga(),
    productsRootSaga(),
    reviewsRootSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
