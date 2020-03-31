import React, { Component } from 'react';
import './Pokecard.css';

const pokeimg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    // static defaultProps = {
    //     id: 4, name: 'Charmander', type: 'fire',
    //     id: 7, name: 'Squirtle', type: 'water',
    //     id: 4, name: 'Charmander', type: 'fire'
    // }
    
    render() {
        let imgSrc = `${pokeimg}${this.props.id}.png`
        return (
        <div className='Pokecard'>
            <h3>{this.props.name}</h3>
            <img src={imgSrc} alt={this.props.name}/>
            <div>Type: {this.props.type}</div>
            <div>EXP: {this.props.exp}</div>
        </div>
        );
    }
}

export default Pokecard;
