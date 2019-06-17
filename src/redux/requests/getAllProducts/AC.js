import createAction from '../../../utils/actionCreators';

export const ActionTypes = {
  GET_ALL_PRODUCTS_REQUEST: 'GET_ALL_PRODUCTS_REQUEST',
  GET_ALL_PRODUCTS_REQUEST_SUCCESS: 'GET_ALL_PRODUCTS_REQUEST_SUCCESS',
  GET_ALL_PRODUCTS_REQUEST_FAIL: 'GET_ALL_PRODUCTS_REQUEST_FAIL',
};

export const Actions = {
  getAllProducts: () => createAction(ActionTypes.GET_ALL_PRODUCTS_REQUEST),
  getAllProductsSuccess: data => createAction(ActionTypes.GET_ALL_PRODUCTS_REQUEST_SUCCESS, { data }),
  getAllProductsFail: errors => createAction(ActionTypes.GET_ALL_PRODUCTS_REQUEST_FAIL, { errors }),
};
