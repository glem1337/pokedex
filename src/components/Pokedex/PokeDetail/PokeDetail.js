import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Placeholder from '../../../assets/logo/logo.svg';
import { capitalizeFirstLetter } from '../../../utils/utils';
import TableData from '../../TableData/TableData';
import PokeTypes from '../PokeTypes/PokeTypes';

function createData(name, value) {
    return { name, value };
}

const PokeDetail = ({ pokemon }) => {
    const id_string = '' + pokemon.id;
    const filler = '000';
    const pokemon_id = filler.substring(0, filler.length - id_string.length) + id_string;
    const stats = Object.values(pokemon.stats);
    const tableRows = stats.map((stat) => {
        return createData(stat.stat.name, stat.base_stat);
    });
    tableRows.push(createData('Weight', pokemon.weight));
    tableRows.push(createData('Total moves', pokemon.moves.length));
    return (
        <Card>
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
                <Typography gutterBottom variant="h4" component="h2">
                    {capitalizeFirstLetter(pokemon.name)} #{pokemon_id}
                </Typography>
                <TableData rows={tableRows} />
            </CardContent>
            <PokeTypes types={pokemon.types} />
        </Card>
    );
};
export default PokeDetail;
