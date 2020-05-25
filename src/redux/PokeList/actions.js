import { REQUEST, SUCCESS, FAILURE, SET_NEXT_URL } from './actionTypes';

export function request() {
    return {
        type: REQUEST,
    };
}

export function success(data) {
    return {
        type: SUCCESS,
        payload: data,
    };
}

export function failure(error) {
    return {
        type: FAILURE,
        payload: error,
    };
}

export function setNextUrl(url) {
    return {
        type: SET_NEXT_URL,
        payload: url,
    };
}
