import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {fetchPokemonsList} from '../redux/PokeList/operations';
import {setSelectedType} from '../redux/PokeTypes/actions';

export const useFetchPokemonsCallback = (offset) => {
    const dispatch = useDispatch();

    return useCallback(() => {
        dispatch(fetchPokemonsList(offset, 12));
        dispatch(setSelectedType('All'));
    }, [offset, dispatch]);
};
