import { useState } from 'react';

function useSearch() {
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState();

  const capitalize = (str) => str.charAt(0).toUpperCase().concat(str.slice(1));
  
  const searchPokemon = () => {
    setError(false);
    setPokemon();
    fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
    .then(handlePokemonFound)
    .catch(() => setError(true))
  };
  
  const handlePokemonFound = async (response) => {
    let { id, name, types, weight, sprites } = await response.json();
    name = capitalize(name);
    types = types.map(({ type }) => type.name);
    sprites = sprites.versions['generation-v']['black-white'].animated;

    savePokemon({
      id,
      name,
      types,
      averageWeight: weight,
      image: sprites.front_default,
      isFavorite: true,
    });
  }

  const savePokemon = (searchedPokemon) => {
    setError(false);
    setPokemon(searchedPokemon);
  };

  return { error, query, pokemon, setQuery, searchPokemon };
}

export default useSearch;