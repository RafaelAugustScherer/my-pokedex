import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Header from './components/Header';
import Search from './components/Search';
import PokedexProvider from './context/PokedexProvider';

function App() {
    return (
      <PokedexProvider>
        <Header title="My Pokedex" />
        <div className="App">
          <Pokedex />
          <Search />
        </div>
      </PokedexProvider>
    );
}

export default App;
