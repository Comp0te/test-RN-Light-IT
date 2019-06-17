import * as fromActions from './AC';
import { ReviewModel } from '../../models/review.model';
import { getNewEntitiesAfterSetData } from '../../utils/utilsForRedux';

export const initialState = {
  entities: {},
  allIds: [],
};

export function reviewsReducer(state = initialState, action) {

  switch (action.type) {
    case fromActions.ActionTypes.SET_REVIEWS_DATA: {
      const reviewsFromAction = action.payload.data.map((review) => new ReviewModel(review));
      const newEntities = getNewEntitiesAfterSetData(state.entities, reviewsFromAction);

      return {
        ...state,
        entities: newEntities,
        allIds: Object.keys(newEntities),
      };
    }

    default:
      return state;
  }
}