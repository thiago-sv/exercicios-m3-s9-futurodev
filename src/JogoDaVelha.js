
import React from 'react';

class JogoDaVelha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabuleiro: Array(9).fill(null),
            jogador: true,
            vencedor: null,
        };
    }

    trataClick(i) {
        const tabuleiro = this.state.tabuleiro.slice();
        if (this.state.vencedor || tabuleiro[i]) {
            return;
        }
        tabuleiro[i] = this.state.jogador ? 'X' : 'O';
        this.setState({
            tabuleiro: tabuleiro,
            jogador: !this.state.jogador,
        });
        this.verificaVencedor(tabuleiro);
    }

    verificaVencedor(tabuleiro) {
        const linhas = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < linhas.length; i++) {
            const [a, b, c] = linhas[i];
            if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
                this.setState({
                    vencedor: tabuleiro[a],
                });
                return;
            }
        }
        if (!tabuleiro.includes(null)) {
            this.setState({
                vencedor: 'Empate',
            });
        }
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.tabuleiro[i]}
                onClick={() => this.trataClick(i)}
            />
        );
    }

    render() {
        return (
            <div >
                <div className="status">{this.state.vencedor ? `Deu: ${this.state.vencedor}` : 'Jogo da Velha'}</div>
                <div className="board-row" style={{ display: "flex" }}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row" style={{ display: "flex" }}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row" style={{ display: "flex" }}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Square extends React.Component {
    render() {
        return (
            <button className="square" style={{ width: "50px", height: "50px", padding: "0", margin: "0", backgroundColor: "magenta", color: "white" }} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}



export default JogoDaVelha;

