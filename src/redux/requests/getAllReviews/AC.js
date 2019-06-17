import createAction from '../../../utils/actionCreators';

export const ActionTypes = {
  GET_ALL_REVIEWS_REQUEST: 'GET_ALL_REVIEWS_REQUEST',
  GET_ALL_REVIEWS_REQUEST_SUCCESS: 'GET_ALL_REVIEWS_REQUEST_SUCCESS',
  GET_ALL_REVIEWS_REQUEST_FAIL: 'GET_ALL_REVIEWS_REQUEST_FAIL',
};

export const Actions = {
  getAllReviews: data => createAction(ActionTypes.GET_ALL_REVIEWS_REQUEST, { data }),
  getAllReviewsSuccess: data => createAction(ActionTypes.GET_ALL_REVIEWS_REQUEST_SUCCESS, { data }),
  getAllReviewsFail: errors => createAction(ActionTypes.GET_ALL_REVIEWS_REQUEST_FAIL, { errors }),
};
