import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from '../constants/index.js';


export function alertSuccess(message) {
    return { type: ALERT_SUCCESS, message };
}

export function alertError(message) {
    return { type: ALERT_ERROR, message };
}

export function alertClear() {
    return { type: ALERT_CLEAR };
}