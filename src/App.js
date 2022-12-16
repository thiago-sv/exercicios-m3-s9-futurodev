import React from 'react';
import Contador from './Contador';
import PesquisaCEP from './PesquisaCEP';
import PesquisaPokemon from './PesquisaPokemon';
import FetchApiRickAndMorty from './FetchApiRickAndMorty';
import JogoDaVelha from './JogoDaVelha';

import About from './About';

class App extends React.Component {
  render() {
    return (<div>
      <JogoDaVelha />
    </div>);
  }
}

export default App;
