import React from 'react';
import PropTypes from 'prop-types';
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

PokeList.propTypes = {
    pokemons: PropTypes.array.isRequired,
};

export default PokeList;
