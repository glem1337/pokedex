import { REQUEST, SUCCESS, FAILURE, SET_SELECTED_TYPE } from './actionTypes';

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

export function setSelectedType(type) {
    return {
        type: SET_SELECTED_TYPE,
        payload: type,
    };
}
