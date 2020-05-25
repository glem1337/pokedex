import { PokeAPI } from '../../api/PokeAPI';
import { request, success, failure, setNextUrl } from './actions';

export const fetchPokemonsList = (offset, limit) => async (dispatch) => {
    dispatch(request());
    try {
        const data = await PokeAPI.getPokemonsList(offset, limit);
        if (data.results.length > 0) {
            const pokemons = await Promise.all(
                data.results.map((pokemon) => PokeAPI.getPokemonByName(pokemon.name))
            );
            dispatch(setNextUrl(data.next));
            dispatch(success(pokemons));
        }
    } catch (e) {
        console.log('Error: ', e);
        dispatch(failure(e.message));
    }
};
