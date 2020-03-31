import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
          <h1>Pokemon!</h1>
          <Pokecard 
            id = {4}
            name = 'Charmander'
            type = 'fire'
            exp = {69}
          />
      </div>
    );
  }
}

export default Pokedex;