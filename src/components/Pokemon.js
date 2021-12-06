import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import typeRefs from '../assets/typeRefs';
import PokedexContext from '../context/PokedexContext';

const Pokemon = ({ pokemon }) => {
  const { id, name, types, averageWeight, image } = pokemon;
  const { pushPokemon, removePokemon, isPokemonInPokedex } = useContext(PokedexContext);
  
  
  return (
  <div className="Pokemon" style={{ borderColor: typeRefs[types[0]][1] }}>
    <span className="pokemon-id">#{id}</span>
    <div>
      <img className="pokemon-image" src={image} alt="Pokemon Name" />
      <p className="pokemon-name">{name}</p>
    </div>
    {types.map((type) => (
      <div key={type}>
        <img className="type-image" src={typeRefs[type][0]} alt="Type Icon" />
        <p className="pokemon-type">{type}</p>
      </div>
    ))}
    <div id="pokemon-lower-div">
      <p className="pokemon-weight">
        Avg. Weight: {averageWeight} kg
      </p>
      <i
        className={isPokemonInPokedex(pokemon) ? 'bi bi-star-fill' : 'bi bi-star'}
        onClick={ !isPokemonInPokedex(pokemon) ? () => pushPokemon(pokemon) : () => removePokemon(pokemon) }
      ></i>
    </div>
  </div>
  )
};

Pokemon.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any),
};

export default Pokemon;
