import { PokeAPI } from '../../api/PokeAPI';
import { request, success, failure } from './actions';

export const fetchPokemonTypes = () => async (dispatch) => {
    dispatch(request());
    try {
        const data = await PokeAPI.getPokemonTypes();
        if (data.results.length > 0) {
            dispatch(success(data.results));
        }
    } catch (e) {
        console.log('Error: ', e);
        dispatch(failure(e.message));
    }
};
