
import { call, put, takeLatest, select } from 'redux-saga/effects';
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
  const pw = yield select(makeSelectRegisterPw());
  const email = yield select(makeSelectRegisterEmail());
  
  console.log(email, pw)
  try {
    const user = yield call(userService.register,email,pw)
    if (true) { // Check for else errors
      yield put(registerSuccess())
      yield put(alertSuccess("Account created"))
      // history.push(from) // after Timeout
      // yield call(history.push, from)
    } else {
      yield put(registerFailure(""))
      yield put(alertError(""))
    }

    
  } catch (error) {
    yield put(registerFailure(error))
    yield put(alertError(error))
  }
}


function* _login({from}) {
  const email = yield select(makeSelectLoginEmail());
  const pw = yield select(makeSelectLoginPw());
  console.log(email, pw)
  
  try {
    const {user} = yield call(userService.login,email,pw)
    console.log(user)
    if (user.token) {
      yield put(loginSuccess(user))
      yield put(alertSuccess("Successfully logged in"))
      history.push(from) // Call two times because buggy?
      yield call(history.push, from)
    } else {
      yield put(loginFailure())
      yield put(alertError("No user found with those credentials"))
      
    }

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