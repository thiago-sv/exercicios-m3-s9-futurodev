//Crie um contador utilizando React, aonde na tecla de "+" adicione 1 ao número, e o botão de "-" diminua 1 do número

import React from 'react';

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        numero: 0,
        };
    }
    
    render() {
        return (
        <div>
            <button onClick={() => this.setState({ numero: this.state.numero - 1 })}>-</button>
            <span>{this.state.numero}</span>
            <button onClick={() => this.setState({ numero: this.state.numero + 1 })}>+</button>
        </div>
        );
    }
    }

export default Contador;
