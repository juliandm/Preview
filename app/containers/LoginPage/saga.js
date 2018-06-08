
import { call, put, takeLatest } from 'redux-saga/effects';
import history from 'helpers/history.js'
import {LOGOUT, LOGIN_REQUEST, GETALL_REQUEST} from "./constants"
import {userService} from "services"
import {
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


function* _login(username, password) {
  yield call(loginRequest,username);
  try {
    const user = yield call(userService.login,[username,password])
    yield call(loginSuccess,user)
    yield call(history.push, "/")
  } catch (error) {
    yield call(loginFailure, error)
    yield call(alertError, error)
  }
}


function* _logout() {
  yield call(userService.logout)
  yield call(logout)
}

function* _getAll() {
  yield call(getAll)
  try {  
    const users = yield call(userService.getAll)
    yield call(getAllSuccess, users)
  } catch (error) {
    yield call(getAllFailure, error)    
  }
}

function* Saga() {
  yield takeLatest(GETALL_REQUEST, _getAll);
  yield takeLatest(LOGOUT, _logout);  
  yield takeLatest(LOGIN_REQUEST, _login);
}

export default Saga;