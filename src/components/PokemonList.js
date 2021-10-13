import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class PokemonList extends Component {

  handleFavorite = (id) => {
    const prevPokedex = JSON.parse(localStorage.getItem('myPokedex'));
    const newPokedex = prevPokedex.filter((pokemon) => pokemon.id !== id);
    localStorage.setItem('myPokedex', JSON.stringify(newPokedex));
    this.props.updateList();
  };

  render() {
    return (
      <div className="Pokemon-list">
        {this.props.pokemons.map((pokemon) =>
          pokemon.isFavorite ? (
            <Pokemon pokemon={pokemon} key={pokemon.id} handleFavorite={this.handleFavorite} isFavorite={true} />
          ) : null
        )}
      </div>
    );
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonList;
