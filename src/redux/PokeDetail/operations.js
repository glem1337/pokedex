import { PokeAPI } from '../../api/PokeAPI';
import { request, success, failure } from './actions';

export const fetchPokemonByName = (name) => async (dispatch) => {
    dispatch(request());
    try {
        const data = await PokeAPI.getPokemonByName(name);
        if (data) {
            dispatch(success(data));
        }
    } catch (e) {
        console.log('Error: ', e);
        dispatch(failure(e.message));
    }
};
