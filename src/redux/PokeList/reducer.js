import { REQUEST, SUCCESS, FAILURE, SET_NEXT_URL } from './actionTypes';

const INITIAL_STATE = {
    pokemons: [],
    loading: false,
    error: null,
    nextUrl: null,
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
                pokemons: [...state.pokemons, ...payload],
                error: null,
                loading: false,
            };
        case FAILURE:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case SET_NEXT_URL:
            return {
                ...state,
                nextUrl: payload,
            };
        default:
            return state;
    }
};
