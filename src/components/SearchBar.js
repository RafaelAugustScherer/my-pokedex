import React, { Component } from 'react';

class SearchBar extends Component {
  onChange = ({ target: { value } }) => this.props.onChange(value);

  onKeyDown = (e) => {
    if (e.key === 'Enter') this.props.onEnter();
  }

  render() {
    return (
      <input
        className="Search-bar"
        type="text"
        placeholder="Pesquise por um Pokémon..."
        value={this.props.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default SearchBar;
