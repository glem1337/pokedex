import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import pokeTypesSelectors from '../../redux/PokeTypes/selectors';
import { fetchPokemonTypes } from '../../redux/PokeTypes/operations';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { setSelectedType } from '../../redux/PokeTypes/actions';

const TypesFilter = () => {
    const dispatch = useDispatch();
    const typesList = useSelector((state) => pokeTypesSelectors.getTypes(state));
    const selectedType = useSelector((state) => pokeTypesSelectors.getSelectedType(state));

    const [anchorEl, setAnchorEl] = React.useState(null);

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    const handleClickItem = (type) => {
        closeMenu();
        dispatch(setSelectedType(type));
    };

    useEffect(() => {
        dispatch(fetchPokemonTypes());
    }, []);

    return (
        <React.Fragment>
            <Button
                aria-controls="simple-menu"
                variant="contained"
                color="secondary"
                aria-haspopup="true"
                onClick={openMenu}
            >
                Filter
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={closeMenu}
            >
                <MenuItem
                    disabled={selectedType === 'All'}
                    selected={selectedType === 'All'}
                    onClick={() => handleClickItem('All')}
                >
                    All
                </MenuItem>
                {typesList &&
                    typesList.map((type) => (
                        <MenuItem
                            key={`key-types-${type.name}`}
                            onClick={() => handleClickItem(type.name)}
                            disabled={selectedType === type.name}
                            selected={selectedType === type.name}
                        >
                            {type.name}
                        </MenuItem>
                    ))}
            </Menu>
        </React.Fragment>
    );
};
export default TypesFilter;
