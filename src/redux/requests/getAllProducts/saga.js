import { put, call, takeEvery } from 'redux-saga/effects';
import apiService from '../../../services/api.service';
import { Actions, ActionTypes } from './AC';

export function* getAllProductsRequestSaga() {
  try {
    const response = yield call([apiService, apiService.getAllProducts]);

    yield put(Actions.getAllProductsSuccess(response.data));
  } catch (error) {
    yield put(Actions.getAllProductsFail(error));
  }
}

export function* getAllProductsRequestRootSaga() {
  yield takeEvery(ActionTypes.GET_ALL_PRODUCTS_REQUEST, getAllProductsRequestSaga);
}
