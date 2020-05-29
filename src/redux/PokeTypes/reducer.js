import { REQUEST, SUCCESS, FAILURE, SET_SELECTED_TYPE } from './actionTypes';

const INITIAL_STATE = {
    types: [],
    loading: false,
    error: null,
    selectedType: 'All',
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case SUCCESS:
            return {
                ...state,
                types: [...state.types, ...payload],
                error: null,
                loading: false,
            };
        case FAILURE:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case SET_SELECTED_TYPE:
            return {
                ...state,
                selectedType: payload,
            };
        default:
            return state;
    }
};
