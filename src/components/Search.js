import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import Error from './Error';

function Search({ pokedex, PushPokemon, RemovePokemon }) {
  const [status, setStatus] = useState(undefined);
  const [value, setValue] = useState('');
  const [pokemon, setPokemon] = useState('');

  const capitalize = (str) => str.charAt(0).toUpperCase().concat(str.slice(1));

  const updateSearchValue = (value) => setValue(value.toLowerCase());

  const isPokemonInPokedex = () => {
    const foundPokemon = pokedex.find(
      ({ id, isFavorite }) => id === pokemon.id && isFavorite
    );
    return !!(foundPokemon);
  };

  const search = () => {
    setStatus(undefined);
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((response) => {
        if (response.ok) {
          response.json().then(({ id, name, types, weight, sprites }) => {
            name = capitalize(name);
            types = types.map(({ type }) => type.name);
            sprites = sprites.versions['generation-v']['black-white'].animated;
            
            renderSearch({
              id,
              name,
              types,
              averageWeight: {
                value: weight,
                measurementUnit: 'kg',
              },
              image: sprites.front_default,
              isFavorite: true,
            });
          });
        } else {
          setStatus(false);
        }
      })
      .catch((err) => console.log('Fetch Error: ', err.message));
  };

  const renderSearch = (searchPokemon) => {
    setPokemon(searchPokemon)
    setStatus(true);
  };

  const pushToPokedex = () => PushPokemon(pokemon);

  const removeFromPokedex = () => RemovePokemon(pokemon);
    return (
      <div className="Search">
        <h2>Adicionar Pokémons</h2>
        <SearchBar
          onChange={updateSearchValue}
          onEnter={search}
          value={value}
        />
        <SearchButton onClick={search} />
        { console.log(status)}
        {status ? (
          <Pokemon
            pokemon={pokemon}
            isFavorite={isPokemonInPokedex()}
            handleFavorite={isPokemonInPokedex() ? removeFromPokedex : pushToPokedex}
          />
        ) : status === false ? (
          <Error />
        ) : null}
      </div>
    );
}

Search.propTypes = {
  pokedex: PropTypes.objectOf(PropTypes.any),
  PushPokemon: PropTypes.func,
  RemovePokemon: PropTypes.func,
}

export default Search;
