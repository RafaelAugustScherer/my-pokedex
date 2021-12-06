import React, { useContext } from 'react';
import Pokemon from './Pokemon';
import PokedexContext from '../context/PokedexContext';

const Pokedex = () => {
  const { pokedex } = useContext(PokedexContext);
  console.log(pokedex)
  return (
    <div className="Pokemon-list">
      {pokedex.map(
        (pokemon) =>
          pokemon.isFavorite && (
            <Pokemon pokemon={pokemon} key={pokemon.id} />
          ) 
      )}
    </div>
  );
};

export default Pokedex;
