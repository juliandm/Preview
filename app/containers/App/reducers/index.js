import { combineReducers } from 'redux-immutable';

import { auth } from './auth.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { register } from './register.reducer';


const authenticationReducer = combineReducers({
  auth,
  register,
  users,
  alert
});
export default authenticationReducer;