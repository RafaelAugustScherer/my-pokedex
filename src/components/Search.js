import React from 'react';
import Pokemon from './Pokemon';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import Error from './Error';
import useSearch from '../hooks/useSearch';

function Search() {
  const { error, query, pokemon, setQuery, searchPokemon } = useSearch();

  return (
    <div className="Search">
      <h2>Adicionar Pokémons</h2>
      <SearchBar onChange={setQuery} onEnter={searchPokemon} value={query} />
      <SearchButton onClick={searchPokemon} />
      {!error && pokemon ? (
        <Pokemon pokemon={pokemon} />
      ) : error && (
        <Error />
      )}
    </div>
  );
}

export default Search;
