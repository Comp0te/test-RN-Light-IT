import * as fromActions from './AC';

export const initialState = {
  language: 'EN',
  isTouchIDAuth: true,
};

export function settingsReducer(state = initialState, action) {
  switch (action.type) {

    case fromActions.ActionTypes.SET_LANGUAGE: {
      const { language } = action.payload;

      return {
        ...state,
        language,
      };
    }

    case fromActions.ActionTypes.SET_IS_TOUCH_ID_AUTH: {
      const { isEnabled } = action.payload;

      return {
        ...state,
        isTouchIDAuth: isEnabled,
      };
    }

    default:
      return state;
  }
}
