import { combineReducers } from 'redux';
import { loginReducer } from './login/reducer';
import { registerReducer } from './register/reducer';
import { getAllProductsReducer } from './getAllProducts/reducer';
import { getAllReviewsReducer } from './getAllReviews/reducer';

export const requestsReducer = combineReducers({
  auth: combineReducers({
    login: loginReducer,
    register: registerReducer,
  }),
  products: combineReducers({
    getAll: getAllProductsReducer,
  }),
  reviews: combineReducers({
    getAll: getAllReviewsReducer,
  }),
});
