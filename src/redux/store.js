import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all } from 'redux-saga/effects';

import { authReducer } from './auth/reducer';
import { requestsReducer } from './requests/reducers';

import { authRootSaga } from './auth/saga';
import { rootRequestsSaga } from './requests/saga';

export const rootReducer = combineReducers({
  auth: authReducer,
  requests: requestsReducer,
});

function* rootSaga() {
  yield all([
    authRootSaga(),
    rootRequestsSaga(),
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
