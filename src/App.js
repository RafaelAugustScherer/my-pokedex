import React, { useState } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Header from './components/Header';
import Search from './components/Search';
import data from './assets/data';

function App() {
  if (!localStorage.getItem('myPokedex')) {
    localStorage.setItem('myPokedex', JSON.stringify(data));
  }

  const [ pokedex, setPokedex ] = useState(JSON.parse(localStorage.getItem('myPokedex')));

  const pushPokemon = (pokemon) => {
    const newPokedex = [...pokedex, pokemon];
    localStorage.setItem('myPokedex', JSON.stringify(newPokedex));
    setPokedex(newPokedex);
  };

  const removePokemon = (pokemon) => {
    const newPokedex = pokedex.filter(({ id }) => id !== pokemon.id);
    localStorage.setItem('myPokedex', JSON.stringify(newPokedex));
    setPokedex(newPokedex);
  };
    return (
      <>
        <Header title="My Pokedex" />
        <div className="App">
          <Pokedex pokemons={pokedex} RemovePokemon={removePokemon} />
          <Search pokedex={pokedex} PushPokemon={pushPokemon} RemovePokemon={removePokemon} />
        </div>
      </>
    );
}

export default App;
