import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import pokeListSelectors from '../redux/PokeList/selectors';

export const useFilteredPokemons = (pokemonType) => {
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const pokemons = useSelector((state) => pokeListSelectors.getList(state));

    useEffect(() => {
        if (pokemonType !== 'All') {
            const filtered = pokemons.filter((pokemon) => {
                return pokemon.types.some((typeObj) => typeObj.type.name === pokemonType);
            });
            setFilteredPokemons([...filtered]);
        }
        return () => {
            setFilteredPokemons([]);
        };
    }, [pokemonType]);

    return filteredPokemons;
};