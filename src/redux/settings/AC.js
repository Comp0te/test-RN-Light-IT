import createAction from '../../utils/actionCreators';

export const ActionTypes = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_IS_TOUCH_ID_AUTH: 'SET_IS_TOUCH_ID_AUTH',
};

export const Actions = {
  setLanguage: language => createAction(ActionTypes.SET_LANGUAGE, { language }),
  setIsTouchIDAuth: isEnabled => createAction(ActionTypes.SET_IS_TOUCH_ID_AUTH, { isEnabled }),
};
