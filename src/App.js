import { Component } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
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

  updatePokemonList = () =>
    this.setState({
      pokemons: JSON.parse(localStorage.getItem('myPokedex')),
    })

  PushPokemonToList = (pokemon) => {
    const prevPokedex = JSON.parse(localStorage.getItem('myPokedex'));
    const newPokedex = JSON.stringify([...prevPokedex, pokemon]);
    localStorage.setItem('myPokedex', newPokedex);
    this.updatePokemonList();
  };

  RemovePokemonFromList = (pokemon) => {
    const prevPokedex = JSON.parse(localStorage.getItem('myPokedex'));
    const newPokedex = JSON.stringify(prevPokedex.filter((storagePokemon) => storagePokemon.id !== pokemon.id));
    localStorage.setItem('myPokedex', newPokedex);
    this.updatePokemonList();
  };

  render() {
    return (
      <>
        <Header title="My Pokedex" />
        <div className="App">
          <PokemonList pokemons={this.state.pokemons} updateList={this.updatePokemonList} />
          <Search pokemons={this.state.pokemons} funcToPush={this.PushPokemonToList} funcToRemove={this.RemovePokemonFromList} />
        </div>
      </>
    );
  }
}

export default App;
