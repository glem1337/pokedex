import React from 'react';
import { Grid } from '@material-ui/core';
import PokeCard from '../PokeCard/PokeCard';

const PokeList = ({ pokemons, ...props }) => {
    return (
        <React.Fragment>
            {pokemons.map((pokemon) => (
                <Grid key={`poke-card-${pokemon.name}`} item xs={4}>
                    <PokeCard {...props} pokemon={pokemon} />
                </Grid>
            ))}
        </React.Fragment>
    );
};
export default PokeList;
