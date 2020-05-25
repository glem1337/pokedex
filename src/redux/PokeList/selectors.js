const getList = (state) => state.pokeList && state.pokeList.pokemons;
const getLoading = (state) => state.pokeList && state.pokeList.loading;
const getError = (state) => state.pokeList && state.pokeList.error;
const getNextUrl = (state) => state.pokeList && state.pokeList.nextUrl;

export default { getList, getLoading, getError, getNextUrl };
