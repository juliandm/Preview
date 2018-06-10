
import { call, put, takeLatest } from 'redux-saga/effects';
import history from 'helpers/history.js'
import {LOGOUT, LOGIN_REQUEST, GETALL_REQUEST, REGISTER_REQUEST} from "./constants/index.js"
import {userService} from "services"
import {makeSelectLocation, makeSelectLoginEmail, makeSelectLoginPw, makeSelectRegisterEmail, makeSelectRegisterPw} from "./selectors"

import {
  registerFailure,
  registerSuccess,
  loginRequest,
  loginSuccess, 
  loginFailure, 
  logout, 
  getAllFailure,
  getAllRequest,
  getAllSuccess,
  alertClear,
  alertSuccess,
  alertError
} from "./actions"

function* _register({from}) {
  const email = makeSelectRegisterEmail;
  const pw = makeSelectRegisterPw;
  try {
    const user = yield call(userService.register,[email,pw])
    yield put(registerSuccess())
    history.push(from)
    yield call(history.push, from)
    
  } catch (error) {
    yield put(registerFailure(error))
    yield put(alertError(error))
  }
}


function* _login({from}) {
  const email = makeSelectLoginEmail;
  const pw = makeSelectLoginPw;
  try {
    const user = yield call(userService.login,[email,pw])
    yield put(loginSuccess(user))
    history.push(from) // Call two times because buggy?
    yield call(history.push, from)
  } catch (error) {
    
    yield put(loginFailure(error))
    yield put(alertError(error))
  }
}


function* _logout() {
  yield call(userService.logout)
  yield call(history.push, "/")
  
}

function* _getAll() {
  try {  
    const users = yield call(userService.getAll)
    yield put(getAllSuccess(users))
  } catch (error) {
    yield put(getAllFailure(error))    
  }
}

function* Saga() {
  yield takeLatest(GETALL_REQUEST, _getAll);
  yield takeLatest(LOGOUT, _logout);  
  yield takeLatest(LOGIN_REQUEST, _login);
  yield takeLatest(REGISTER_REQUEST, _register);
  
}

export default Saga;