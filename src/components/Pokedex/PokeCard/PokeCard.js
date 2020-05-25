import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Chip,
    Grow,
} from '@material-ui/core';
import Placeholder from '../../../assets/logo/logo.svg';
import { style } from '../../../theme/style';
import { capitalizeFirstLetter } from '../../../utils/utils';

const PokeCard = ({ pokemon, fetchPokemon }) => {
    const classes = style();
    return (
        <Grow in>
            <Card>
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
                <CardActions>
                    {pokemon.types.map((item) => (
                        <Chip
                            key={`item-type-${item.type.name}`}
                            className={classes[item.type.name]}
                            label={capitalizeFirstLetter(item.type.name)}
                        />
                    ))}
                </CardActions>
            </Card>
        </Grow>
    );
};
export default PokeCard;
