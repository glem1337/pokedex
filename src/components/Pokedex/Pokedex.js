import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Container, Button, Grow } from '@material-ui/core';
import PokeList from './PokeList/PokeList';
import PokeDetail from './PokeDetail/PokeDetail';
import pokeListSelectors from '../../redux/PokeList/selectors';
import pokeDetailSelectors from '../../redux/PokeDetail/selectors';
import pokeTypesSelectors from '../../redux/PokeTypes/selectors';
import { fetchPokemonsList } from '../../redux/PokeList/operations';
import StickyBox from 'react-sticky-box/dist/esnext';
import { fetchPokemonByName } from '../../redux/PokeDetail/operations';
import Alert from '@material-ui/lab/Alert';
import { useFilteredPokemons } from '../../hooks/useFilteredPokemons';
import { setSelectedType } from '../../redux/PokeTypes/actions';

const mapState = (state) => ({
    pokemons: pokeListSelectors.getList(state),
    nextUrl: pokeListSelectors.getNextUrl(state),
    listLoading: pokeListSelectors.getLoading(state),
    listError: pokeListSelectors.getError(state),
    pokemon: pokeDetailSelectors.getPokemon(state),
    detailError: pokeDetailSelectors.getError(state),
    selectedType: pokeTypesSelectors.getSelectedType(state),
});

const Pokedex = () => {
    const dispatch = useDispatch();
    let {
        pokemons,
        nextUrl,
        listLoading,
        listError,
        pokemon,
        detailError,
        selectedType,
    } = useSelector(mapState);

    const fetchPokemons = useCallback(() => {
        dispatch(fetchPokemonsList(pokemons.length, 12));
        dispatch(setSelectedType('All'));
    }, [pokemons.length]);

    const fetchPokemon = (name) => {
        dispatch(fetchPokemonByName(name));
    };

    const filteredPokemons = useFilteredPokemons(selectedType);

    useEffect(() => {
        fetchPokemons();
    }, []);

    // TODO Инкапусулировать данные для списка покемонов и для детального просмотра
    return (
        <Box mt={5}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item container xs={7} spacing={3}>
                        {filteredPokemons.length === 0 && selectedType !== 'All' && (
                            <Grid item xs={12}>
                                <Alert severity="warning">No pokemons by type {selectedType}</Alert>
                            </Grid>
                        )}
                        {pokemons && (
                            <PokeList
                                pokemons={filteredPokemons.length > 0 ? filteredPokemons : pokemons}
                                fetchPokemon={fetchPokemon}
                            />
                        )}
                        {listError && (
                            <Grid item xs={12}>
                                <Alert severity="error">{listError}</Alert>
                            </Grid>
                        )}
                        {nextUrl && (
                            <Grid item xs={12}>
                                <Box mt={5} display="flex" justifyContent="center">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        onClick={fetchPokemons}
                                        disabled={listLoading}
                                    >
                                        Load More
                                    </Button>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <StickyBox offsetTop={100} offsetBottom={20}>
                            {pokemon && (
                                <Grow in>
                                    <Box mb={2} minWidth={0.75}>
                                        <PokeDetail pokemon={pokemon} />
                                    </Box>
                                </Grow>
                            )}
                            {detailError && <Alert severity="error">{detailError}</Alert>}
                        </StickyBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Pokedex;
