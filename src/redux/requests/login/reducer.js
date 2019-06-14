import * as fromActions from './AC';

export const initialState = {
  isLoading: false,
  errors: null,
  data: null,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case fromActions.ActionTypes.LOGIN_REQUEST:
      return {
        isLoading: true,
        errors: null,
        data: null,
      };

    case fromActions.ActionTypes.LOGIN_REQUEST_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    }

    case fromActions.ActionTypes.LOGIN_REQUEST_FAIL: {
      const { payload } = action;

      return {
        ...state,
        isLoading: false,
        errors: payload.errors,
      };
    }

    default:
      return state;
  }
}
