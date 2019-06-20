import * as fromActions from './AC';
import * as authActions from '../auth/AC';
import { ProductModel } from '../../models/product.model';
import { getNewEntitiesAfterSetData } from '../../utils/utilsForRedux';

export const initialState = {
  entities: {},
  allIds: [],
};

export function productsReducer(state = initialState, action) {

  switch (action.type) {
    case fromActions.ActionTypes.SET_PRODUCTS_DATA: {
      const productsFromAction = action.payload.data.map((product) => new ProductModel(product));
      const newEntities = getNewEntitiesAfterSetData(state.entities, productsFromAction);

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