import { put, takeEvery } from 'redux-saga/effects';
import * as usersAC from './AC';
import { requestsAC } from '../requests/AC';

export function* setUsersDataFromReviewSaga({payload}) {
  yield put(usersAC.Actions.setUsersDataFromReview(payload.data));
}

export function* usersRootSaga() {
  yield takeEvery([
    requestsAC.getAllReviews.ActionTypes.GET_ALL_REVIEWS_REQUEST_SUCCESS,
  ], setUsersDataFromReviewSaga);
}
