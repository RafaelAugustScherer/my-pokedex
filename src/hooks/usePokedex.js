import { useState } from 'react';
import initialPokedex from '../assets/data';

function usePokedex() {
  let currentPokedex = JSON.parse(localStorage.getItem('myPokedex'));

  if (!currentPokedex) {
    localStorage.setItem('myPokedex', JSON.stringify(initialPokedex));
    currentPokedex = initialPokedex;
  }

  const [pokedex, setPokedex] = useState(currentPokedex);

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

  const isPokemonInPokedex = (pokemon) => {
    const foundPokemon = pokedex.find(
      ({ id, isFavorite }) => id === pokemon.id && isFavorite
    );
    return !!foundPokemon;
  };

  return { pokedex, pushPokemon, removePokemon, isPokemonInPokedex };
}

export default usePokedex;