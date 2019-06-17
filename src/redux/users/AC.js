import createAction from '../../utils/actionCreators';

export const ActionTypes = {
  SET_USERS_DATA_FROM_REVIEW: 'SET_USERS_DATA_FROM_REVIEW',
};

export const Actions = {
  setUsersDataFromReview: data => createAction(ActionTypes.SET_USERS_DATA_FROM_REVIEW, {data}),
};
