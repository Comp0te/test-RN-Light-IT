import { put, call, takeEvery } from 'redux-saga/effects';
import apiService from '../../../services/api.service';
import { Actions, ActionTypes } from './AC';

export function * getAllReviewsRequestSaga({payload}) {
  try {
    const response = yield call([apiService, apiService.getAllReviews], payload.data);

    if (response.data.success) {
      yield put(Actions.getAllReviewsSuccess(response.data));
    }

    yield put(Actions.getAllReviewsFail(response.data.message));
  } catch (error) {
    yield put(Actions.getAllReviewsFail(error));
  }
}

export function * getAllReviewsRequestRootSaga() {
  yield takeEvery(ActionTypes.GET_ALL_REVIEWS_REQUEST, getAllReviewsRequestSaga);
}
