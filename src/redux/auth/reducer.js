import * as fromActions from './AC';

export const initialState = {
  isAuthUser: false
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case fromActions.ActionTypes.AUTH_SET_IS_AUTH_USER: {
      const { data } = action.payload;

      return {
        isAuthUser: data
      };
    }

    case fromActions.ActionTypes.AUTH_LOGOUT: {
      return {
        isAuthUser: false
      };
    }

    default:
      return state;
  }
}
