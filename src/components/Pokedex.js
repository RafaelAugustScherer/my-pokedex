import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

const Pokedex = ({ pokemons, RemovePokemon }) => (
  <div className="Pokemon-list">
    {pokemons.map((pokemon) =>
      pokemon.isFavorite ? (
        <Pokemon
          pokemon={pokemon}
          key={pokemon.id}
          handleFavorite={() => RemovePokemon(pokemon)}
          isFavorite={true}
        />
      ) : null
    )}
  </div>
);

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};

export default Pokedex;
