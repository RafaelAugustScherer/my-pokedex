import { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Header from './components/Header';
import Search from './components/Search';
import data from './assets/data';

class App extends Component {
  constructor() {
    super();

    if (!localStorage.getItem('myPokedex')) {
      localStorage.setItem('myPokedex', JSON.stringify(data));
    }
    this.state = {
      pokemons: JSON.parse(localStorage.getItem('myPokedex')),
    };
  }

  updatePokedex = () =>
    this.setState({
      pokemons: JSON.parse(localStorage.getItem('myPokedex')),
    })

  PushPokemon = (pokemon) => {
    const prevPokedex = JSON.parse(localStorage.getItem('myPokedex'));
    const newPokedex = JSON.stringify([...prevPokedex, pokemon]);
    localStorage.setItem('myPokedex', newPokedex);
    this.updatePokedex();
  };

  RemovePokemon = (pokemon) => {
    const prevPokedex = JSON.parse(localStorage.getItem('myPokedex'));
    const newPokedex = JSON.stringify(prevPokedex.filter((storagePokemon) => storagePokemon.id !== pokemon.id));
    localStorage.setItem('myPokedex', newPokedex);
    this.updatePokedex();
  };

  render() {
    return (
      <>
        <Header title="My Pokedex" />
        <div className="App">
          <Pokedex pokemons={this.state.pokemons} Remove={this.RemovePokemon} />
          <Search pokemons={this.state.pokemons} Push={this.PushPokemon} Remove={this.RemovePokemon} />
        </div>
      </>
    );
  }
}

export default App;
