//funcionalidade de pesquisar Pokemons, utilizando a API do Pokemon
// retornando as seguintes informações:
//"nome"
// "hp"
// "attack"
// "defense"
// "special-attack"
// "special-defense"
// "speed"
// "imagem"

import React from 'react';

class PesquisaPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: '',
            hp: '',
            attack: '',
            defense: '',
            specialAttack: '',
            specialDefense: '',
            speed: '',
            image: '',
        };
    }

    handlePokemonChange = (event) => {
        this.setState({ pokemon: event.target.value });
    }

    handlePokemonSearch = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    specialAttack: data.stats[3].base_stat,
                    specialDefense: data.stats[4].base_stat,
                    speed: data.stats[5].base_stat,
                    image: data.sprites.front_default,
                });
            });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.pokemon} onChange={this.handlePokemonChange} />
                <button onClick={this.handlePokemonSearch}>Pesquisar</button>
                <p>HP: {this.state.hp}</p>
                <p>Attack: {this.state.attack}</p>
                <p>Defense: {this.state.defense}</p>
                <p>Special Attack: {this.state.specialAttack}</p>
                <p>Special Defense: {this.state.specialDefense}</p>
                <p>Speed: {this.state.speed}</p>
                <img src={this.state.image} alt="pokemon" />
            </div>
        );
    }
}

export default PesquisaPokemon;