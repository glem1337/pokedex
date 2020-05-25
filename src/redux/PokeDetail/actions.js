import { REQUEST, SUCCESS, FAILURE } from './actionTypes';

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
