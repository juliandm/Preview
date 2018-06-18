import { userService } from 'services';
import { history } from 'helpers';
import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GETALL_REQUEST,
    GETALL_SUCCESS,
    GETALL_FAILURE,
    LOGOUT, 
    REGISTER_FAILURE, 
    REGISTER_DELETE, 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS 
} from '../constants/index.js';


export function registerRequest(request) {console.log(request); return { type: REGISTER_REQUEST, ...request } }
export function registerSuccess(user) { return { type: REGISTER_SUCCESS, user } }
export function registerFailure(error) { return { type: REGISTER_FAILURE, error } }

export function loginRequest(from) { return { type: LOGIN_REQUEST, from } }
export function loginSuccess(user) { return { type: LOGIN_SUCCESS, user } }
export function loginFailure(error) { return { type: LOGIN_FAILURE } }

export function getAllRequest() { return { type: GETALL_REQUEST } }
export function getAllSuccess(users) { return { type: GETALL_SUCCESS, users } }
export function getAllFailure(error) { return { type: GETALL_FAILURE, error } }

export function logout() { return { type: LOGOUT } }
