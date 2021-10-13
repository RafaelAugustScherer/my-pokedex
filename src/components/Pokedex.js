import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokemon-list">
        {this.props.pokemons.map((pokemon) =>
          pokemon.isFavorite ? (
            <Pokemon pokemon={pokemon} key={pokemon.id} handleFavorite={() => this.props.Remove(pokemon)} isFavorite={true} />
          ) : null
        )}
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};

export default Pokedex;
