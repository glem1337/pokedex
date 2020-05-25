import React from 'react';
import { AppBar, Toolbar, Box, Container, Link, Typography } from '@material-ui/core';
import Logo from '../../assets/logo/logo.svg';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import { style } from '../../theme/style';
import { useSelector } from 'react-redux';
import pokeListSelectors from '../../redux/PokeList/selectors';
import pokeDetailSelectors from '../../redux/PokeDetail/selectors';

const Header = () => {
    const classes = style();
    const { listLoading, detailLoading } = useSelector((state) => ({
        listLoading: pokeListSelectors.getLoading(state),
        detailLoading: pokeDetailSelectors.getLoading(state),
    }));
    return (
        <AppBar position="sticky">
            {(listLoading || detailLoading) && (
                <LinearProgress className={classes.loader} color="secondary" />
            )}
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box display="flex" flexGrow="1" alignItems="center">
                        <Box mr={2}>
                            <Link href="/">
                                <img width="48" height="48" src={Logo} alt="Pokedex" />
                            </Link>
                        </Box>
                        <Typography variant="h6">Pokedex</Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
