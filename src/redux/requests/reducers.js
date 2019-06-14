import { combineReducers } from 'redux';
import { loginReducer } from './login/reducer';
import { registerReducer } from './register/reducer';

export const requestsReducer = combineReducers({
  auth: combineReducers({
    login: loginReducer,
    register: registerReducer
  })
});
