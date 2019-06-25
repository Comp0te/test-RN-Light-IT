import { put, takeEvery } from 'redux-saga/effects';
import * as reviewsAC from './AC';
import { requestsAC } from '../requests/AC';

export function* setReviewsDataSaga({ payload }) {
  yield put(reviewsAC.Actions.setReviewsData(payload.data));
}

export function* reviewsRootSaga() {
  yield takeEvery([
    requestsAC.getAllReviews.ActionTypes.GET_ALL_REVIEWS_REQUEST_SUCCESS,
  ], setReviewsDataSaga);
}
