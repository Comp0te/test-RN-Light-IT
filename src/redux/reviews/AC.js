import createAction from '../../utils/actionCreators';

export const ActionTypes = {
  SET_REVIEWS_DATA: 'SET_REVIEWS_DATA',
};

export const Actions = {
  setReviewsData: (data) => createAction(ActionTypes.SET_REVIEWS_DATA, {data}),
};
