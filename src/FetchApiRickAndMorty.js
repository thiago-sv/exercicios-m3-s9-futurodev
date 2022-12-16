
import React from 'react';

class FetchApiRickAndMorty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personagens: [],
            pagina: 1,
        };
    }

    componentDidMount() {
        this.fetchPersonagens();
    }

    fetchPersonagens = () => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.pagina}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    personagens: data.results,
                });
            });
    }

    handleNextPage = () => {
        this.setState({ pagina: this.state.pagina + 1 }, this.fetchPersonagens);
    }

    handlePreviousPage = () => {
        this.setState({ pagina: this.state.pagina - 1 }, this.fetchPersonagens);
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePreviousPage}>Anterior</button>
                <button onClick={this.handleNextPage}>Próximo</button>
                <ul>
                    {this.state.personagens.map((personagem) => (
                        <li key={personagem.id}>
                            <p>{personagem.name}</p>
                            <p>{personagem.status}</p>
                            <p>{personagem.species}</p>
                            <img src={personagem.image} alt="personagem" />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FetchApiRickAndMorty;