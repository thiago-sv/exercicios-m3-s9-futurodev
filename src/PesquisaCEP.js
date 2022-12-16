

import React from 'react';

class PesquisaCEP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cep: '',
            logradouro: '',
            bairro: '',
            cidade: '',
            estado: '',
        };
    }

    handleCepChange = (event) => {
        this.setState({ cep: event.target.value });
    }

    handleCepSearch = () => {
        fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.uf,
                });
            });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.cep} onChange={this.handleCepChange} />
                <button onClick={this.handleCepSearch}>Pesquisar</button>
                <p>Logradouro: {this.state.logradouro}</p>
                <p>Bairro: {this.state.bairro}</p>
                <p>Cidade: {this.state.cidade}</p>
                <p>Estado: {this.state.estado}</p>
            </div>
        );
    }
}

export default PesquisaCEP;

