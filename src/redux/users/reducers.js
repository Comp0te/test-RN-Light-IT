import * as fromActions from './AC';
import * as authActions from '../auth/AC';
import { UserModel } from '../../models/user.model';
import { getNewEntitiesAfterSetData } from '../../utils/utilsForRedux';

export const initialState = {
  entities: {},
  allIds: [],
};

export function usersReducer(state = initialState, action) {

  switch (action.type) {
    case fromActions.ActionTypes.SET_USERS_DATA_FROM_REVIEW: {
      const usersFromAction = action.payload.data.map((review) => new UserModel(review));
      const newEntities = getNewEntitiesAfterSetData(state.entities, usersFromAction);

      return {
        ...state,
        entities: newEntities,
        allIds: Object.keys(newEntities),
      };
    }

    case authActions.ActionTypes.AUTH_LOGOUT: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}