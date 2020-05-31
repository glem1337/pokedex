import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, Chip } from '@material-ui/core';
import { capitalizeFirstLetter } from '../../../utils/utils';
import './PokeTypes.scss';

const PokeTypes = ({ types }) => {
    return (
        <CardActions className="poke-types">
            {types.map((item) => (
                <Chip
                    key={`item-type-${item.type.name}`}
                    className={item.type.name}
                    label={capitalizeFirstLetter(item.type.name)}
                />
            ))}
        </CardActions>
    );
};

PokeTypes.propTypes = {
    types: PropTypes.array.isRequired,
};

export default PokeTypes;
