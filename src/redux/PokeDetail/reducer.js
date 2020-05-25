import { REQUEST, SUCCESS, FAILURE } from './actionTypes';

const INITIAL_STATE = {
    pokemon: null,
    loading: false,
    error: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case REQUEST:
            return {
                ...state,
                pokemon: null,
                error: null,
                loading: true,
            };
        case SUCCESS:
            return {
                ...state,
                pokemon: payload,
                error: null,
                loading: false,
            };
        case FAILURE:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};
