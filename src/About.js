// crie um componente que retorne um <h1> com o seu nome e um parágrafo <p> que contenha uma breve descrição sobre você.
// Crie uma lista das suas habilidades como programador dentro do componente About.
//Adicione um <h2> com o título “Minhas Habilidades”
//Importe seu componente em App.js, de modo que ele seja renderizado na tela quando a aplicação for iniciada

import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>Thiago</h1>
                <p>Estudante de desenvolvimento web</p>
                <h2>Minhas Habilidades</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
        );
    }
}

export default About;
