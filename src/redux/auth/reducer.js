import * as fromActions from './AC';

export const initialState = {
  token: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case fromActions.ActionTypes.AUTH_SET_TOKEN: {
      const { data } = action.payload;

      return {
        token: data,
      };
    }

    case fromActions.ActionTypes.AUTH_LOGOUT: {
      return {
        token: null,
      };
    }

    default:
      return state;
  }
}
