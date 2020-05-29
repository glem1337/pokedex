const getTypes = (state) => state.pokeTypes && state.pokeTypes.types;
const getSelectedType = (state) => state.pokeTypes && state.pokeTypes.selectedType;
const getLoading = (state) => state.pokeTypes && state.pokeTypes.loading;
const getError = (state) => state.pokeTypes && state.pokeTypes.error;

export default { getTypes, getSelectedType, getLoading, getError };
