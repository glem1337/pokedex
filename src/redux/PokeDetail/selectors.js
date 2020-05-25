const getPokemon = (state) => state.pokeDetail && state.pokeDetail.pokemon;
const getLoading = (state) => state.pokeDetail && state.pokeDetail.loading;
const getError = (state) => state.pokeDetail && state.pokeDetail.error;

export default { getPokemon, getLoading, getError };
