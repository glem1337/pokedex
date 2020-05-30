import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';
import PokePage from './components/PokePage/PokePage';

const App = () => (
    <React.Fragment>
        <Header />
        <Route exact path="/pokedex/">
            <Pokedex />
        </Route>
        <Route path="/pokedex/:pokeName">
            <PokePage />
        </Route>
    </React.Fragment>
);

export default App;
