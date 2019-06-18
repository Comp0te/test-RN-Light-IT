import createAction from '../../utils/actionCreators';

export const ActionTypes = {
  REHYDRATE_STORE: 'REHYDRATE_STORE',
  SAVE_PRODUCT_WITH_REVIEWS: 'SAVE_PRODUCT_WITH_REVIEWS',
};

export const Actions = {
  rehydrateStore: () => createAction(ActionTypes.REHYDRATE_STORE),
  saveProductWithReviews: productId => createAction(ActionTypes.SAVE_PRODUCT_WITH_REVIEWS, {productId}),
};
