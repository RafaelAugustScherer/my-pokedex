import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange, onEnter }) => (
  <input
    className="Search-bar"
    type="text"
    placeholder="Pesquise por um Pokémon..."
    value={value}
    onChange={({ target: { value } }) => onChange(value)}
    onKeyDown={({ key }) => key === 'Enter' && onEnter()}
  />
);

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
}

export default SearchBar;
