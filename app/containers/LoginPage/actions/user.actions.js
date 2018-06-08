import { userService } from 'services';
import { history } from 'helpers';
import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,GETALL_REQUEST,GETALL_SUCCESS,GETALL_FAILURE,LOGOUT } from '../constants/index.js';




export function loginRequest(user) { return { type: LOGIN_REQUEST, user } }
export function loginSuccess(user) { return { type: LOGIN_SUCCESS, user } }
export function loginFailure(error) { return { type: LOGIN_FAILURE, error } }

export function getAllRequest() { return { type: GETALL_REQUEST } }
export function getAllSuccess(users) { return { type: GETALL_SUCCESS, users } }
export function getAllFailure(error) { return { type: GETALL_FAILURE, error } }

export function logout() { return { type: LOGOUT } }
