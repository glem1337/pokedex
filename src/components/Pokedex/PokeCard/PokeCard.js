import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grow } from '@material-ui/core';
import Placeholder from '../../../assets/logo/logo.svg';
import { capitalizeFirstLetter } from '../../../utils/utils';
import PokeTypes from '../PokeTypes/PokeTypes';

const PokeCard = ({ pokemon, fetchPokemon }) => {
    return (
        <Grow in>
            <Card className="poke-card">
                <CardActionArea
                    onClick={() => {
                        fetchPokemon(pokemon.name);
                    }}
                >
                    <CardMedia
                        component="img"
                        alt={pokemon.name}
                        height="96"
                        image={pokemon.sprites.front_default}
                        title={pokemon.name}
                        onError={(e) => {
                            e.target.src = Placeholder;
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {capitalizeFirstLetter(pokemon.name)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <PokeTypes types={pokemon.types} />
            </Card>
        </Grow>
    );
};
export default PokeCard;
