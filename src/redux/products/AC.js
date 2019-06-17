import createAction from '../../utils/actionCreators';

export const ActionTypes = {
  SET_PRODUCTS_DATA: 'SET_PRODUCTS_DATA',
};

export const Actions = {
  setProductsData: (data) => createAction(ActionTypes.SET_PRODUCTS_DATA, {data}),
};
