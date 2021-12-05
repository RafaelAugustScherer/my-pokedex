import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({ onClick }) => (
  <button className="Search-button" onClick={onClick}>
    <i className="bi bi-search"></i>
  </button>
);

SearchButton.propTypes = {
  onClick: PropTypes.func,
}

export default SearchButton;
