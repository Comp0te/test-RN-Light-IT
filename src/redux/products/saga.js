import { put, takeEvery } from 'redux-saga/effects';
import * as productsAC from './AC';
import { requestsAC } from '../requests/AC';

export function* setProductsDataSaga({ payload }) {
  yield put(productsAC.Actions.setProductsData(payload.data));
}

export function* productsRootSaga() {
  yield takeEvery([
    requestsAC.getAllProducts.ActionTypes.GET_ALL_PRODUCTS_REQUEST_SUCCESS,
  ], setProductsDataSaga);
}
