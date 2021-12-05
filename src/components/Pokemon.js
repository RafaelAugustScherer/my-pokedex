import React from 'react';
import PropTypes from 'prop-types';
import typeRefs from '../assets/typeRefs';

const Pokemon = ({ pokemon: { id, name, types, averageWeight, image }, isFavorite, handleFavorite }) => (
  <div className="Pokemon" style={{ borderColor: typeRefs[types[0]][1] }}>
    <span className="pokemon-id">#{id}</span>
    <div>
      <img className="pokemon-image" src={image} alt="Pokemon Name" />
      <p className="pokemon-name">{name}</p>
    </div>
    {types.map((type, idx) => (
      <div key={idx}>
        <img className="type-image" src={typeRefs[type][0]} alt="Type Icon" />

        <p className="pokemon-type">{type}</p>
      </div>
    ))}
    <div id="pokemon-lower-div">
      <p className="pokemon-weight">
        Avg. Weight: {averageWeight.value} {averageWeight.measurementUnit}
      </p>
      <i
        className={isFavorite ? 'bi bi-star-fill' : 'bi bi-star'}
        onClick={() => handleFavorite(id)}
      ></i>
    </div>
  </div>
);

Pokemon.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any),
  isFavorite: PropTypes.func,
  handleFavorite: PropTypes.func,
};

export default Pokemon;
