import React from 'react';
import { AppBar, Toolbar, Box, Container, Link, Typography } from '@material-ui/core';
import Logo from '../../assets/logo/logo.svg';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import { useSelector } from 'react-redux';
import pokeListSelectors from '../../redux/PokeList/selectors';
import pokeDetailSelectors from '../../redux/PokeDetail/selectors';
import TypesFilter from '../TypesFilter/TypesFilter';
import './Header.scss';

const mapState = (state) => ({
    listLoading: pokeListSelectors.getLoading(state),
    detailLoading: pokeDetailSelectors.getLoading(state),
});

const Header = () => {
    const { listLoading, detailLoading } = useSelector(mapState);

    return (
        <AppBar className="header" position="sticky">
            {(listLoading || detailLoading) && (
                <LinearProgress className="loader" color="secondary" />
            )}
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box display="flex" flexGrow="1" alignItems="center">
                        <Box mr={2}>
                            <Link href="/pokedex/">
                                <img width="48" height="48" src={Logo} alt="Pokedex" />
                            </Link>
                        </Box>
                        <Typography variant="h6">Pokedex</Typography>
                        <Box ml="auto">
                            <TypesFilter />
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
