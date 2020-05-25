import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

import pokeListReducer from '../redux/PokeList/reducer';
import pokeDetailReducer from '../redux/PokeDetail/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    pokeList: pokeListReducer,
    pokeDetail: pokeDetailReducer,
});

const middlewares = applyMiddleware(thunk);

const store = createStore(reducers, composeEnhancers(middlewares));

export default store;
